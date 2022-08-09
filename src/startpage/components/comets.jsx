import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import './styles/comets.css'
import { Plane, OrthographicCamera, OrbitControls, Effects } from "@react-three/drei";
import { tetriminos } from "./scripts/tetriminos";
import * as THREE from 'three';
import { useControls, Leva } from 'leva';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'

//todo: place drop and tetrimino rendering logic in custom hooks that all components can share
const Comets = () => {
    const canvasRef = useRef()

    const tetriminoArr = []
    const count = 15


    for (let i = 0; i < count; i++) {
        tetriminoArr.push(<Board key={i} />)
    }
    // console.log(EffectComposer)
    // antialias: true,   autoClearColor: false, preserveDrawingBuffer: true,
    return (
        <Canvas gl={{ gamaOutput: true, autoClearColor: false, preserveDrawingBuffer: true, }} ref={canvasRef} id="canvas" >
            {/* <Canvas ref={canvasRef} id="canvas" > */}
            {/* <OrbitControls /> */}
            {/* <color attach="background" args={['blue']} /> */}
            <OrthographicCamera position={[0, 0, 4.3]}>
                <Leva hidden />
                <SemiTransparentLayer />
                <Effects multisamping={8} renderIndex={1} disableGamma={false} disableRenderPass={false} disableRender={false}>
                    {/* <afterimagePass args={[0.8]} /> */}
                </Effects>
                {tetriminoArr}
            </OrthographicCamera>
        </Canvas>
    )
}

const Board = props => {
    useEffect(() => {
        group.current.position.y = -2
    }, [])

    useFrame(() => {
        if (canDrop) {

            if (group.current.position.y < -.7) {
                // console.log(group.current)
                canDrop = false
                // Set New Color
                setColor(group.current.children)

                // Reset Tetrimino Position
                clearTetriminoPositions()

                group.current.position.y = Math.random() * (2 - .7) + .7
                group.current.position.x = Math.random() * (1 + 1) - 1

                //Reset SpeedRandomizer
                speedRandomizer = Math.random() + .5

                newTetrimino()

                canDrop = true
            }


            //Lower Tetrimino
            group.current.position.y -= .02 * speedControl.speed * speedRandomizer
        }
        // drop()
    })


    const sq1 = useRef()
    const sq2 = useRef()
    const sq3 = useRef()
    const sq4 = useRef()
    const group = useRef()
    const colorRef = useRef()
    const sqArr = [sq1, sq2, sq3, sq4]
    const colorArr = ['0x6bb9a2', '0xff6ca6', '0xff9677', '0xf9f871', '0x00aeef', '0xba74fc', '0xec64da']
    // GUI
    const args = useControls({
        args: {
            label: 'Square Size',
            value: [.02, .02], min: 0, max: 100, step: .1
        },
        position: {
            value: [0, 0, 0], min: 0, max: 100
        },
        rotation: {
            value: [0, 0, 0], min: -10, max: 10, step: .01,
        }
    })

    const speedControl = useControls({
        speed: {
            value: .06, min: 0, max: 1, step: .001,
        },
    })

    // FUNCTIONS
    // pick a random tetrimino
    const pickTetrimino = () => tetriminos[Math.floor(Math.random() * tetriminos.length)]

    let canDrop = true
    let speedRandomizer = Math.random() + .5

    const newTetrimino = () => {
        const activeTetrimino = pickTetrimino()
        positionTetrimino(activeTetrimino.cordinates)
    }

    const setColor = (squares) => {
        const color = Math.floor(Math.random() * (colorArr.length))

        for (let i = 0; i < sqArr.length; i++) {
            sqArr[i].current.material.color.setHex(colorArr[color])
        }
        // console.log(sqArr[0].current.material.color)
    }

    const clearTetriminoPositions = () => {
        for (let i = 0; i < sqArr.length; i++) {
            sqArr[i].current.position.x = 0
            sqArr[i].current.position.y = 0
        }
    }

    const positionTetrimino = (tetrimino) => {
        for (let i = 1; i < tetrimino.length; i++) {
            if (tetrimino[i][0] !== 0) sqArr[i].current.position.x += args.args[0] * tetrimino[i][0]
            if (tetrimino[i][1] !== 0) sqArr[i].current.position.y += args.args[1] * tetrimino[i][1]
        }
    }

    return (
        <Suspense fallback={null}>

            <group ref={group}  >
                <mesh>
                    <Plane ref={sq1} {...args}   >
                        <meshBasicMaterial ref={colorRef} />
                    </Plane>
                </mesh>
                <mesh>
                    <Plane ref={sq2} {...args} >
                        <meshBasicMaterial ref={colorRef} />
                    </Plane>
                </mesh>
                <mesh>
                    <Plane ref={sq3} {...args}  >
                        <meshBasicMaterial ref={colorRef} />
                    </Plane>
                </mesh>
                <mesh>
                    <Plane ref={sq4} {...args}  >
                        <meshBasicMaterial ref={colorRef} />
                    </Plane>
                </mesh>
            </group>
        </Suspense>
    )
}

const SemiTransparentLayer = () => {

    return (
        <mesh position={[0, 0, -.1]} >
            <planeGeometry args={[4, 2]} />
            <meshBasicMaterial color='#000000' transparent={true} opacity={.15} />
        </mesh>
    )
}

export default Comets;