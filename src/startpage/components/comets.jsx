import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import './styles/comets.css'
import { Plane, OrthographicCamera } from "@react-three/drei";
import { tetriminos } from "./scripts/tetriminos";
import * as THREE from 'three';
import { useControls, Leva } from 'leva';



const Comets = () => {
    const canvasRef = useRef()

    return (

        <Canvas ref={canvasRef} id="canvas">
            <Leva hidden />
            <Board />
        </Canvas>
    )
}

const Board = props => {

    useEffect(() => {
        group.current.position.y = -2
    }, [])

    useFrame(() => {
        if (canDrop) drop()
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
            value: [.035, .035], min: 0, max: 100, step: .1
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
            value: 1, min: 0, max: 2, step: .001,
        },

    })

    // FUNCTIONS
    // pick a random tetrimino
    const pickTetrimino = () => tetriminos[Math.floor(Math.random() * tetriminos.length)]

    let canDrop = true

    const drop = () => {

        if (group.current.position.y < -1) {
            canDrop = false
            // Set New Color
            setColor(group.current.children)

            // Reset Tetrimino Position
            clearTetriminoPositions()

            group.current.position.y = 2
            group.current.position.x = Math.random() * (1 + 1) - 1

            newTetrimino()
            canDrop = true
        }

        group.current.position.y -= .02 * speedControl.speed
    }

    const newTetrimino = () => {
        const activeTetrimino = pickTetrimino()
        positionTetrimino(activeTetrimino.cordinates)
    }

    const setColor = (squares) => {
        const color = Math.floor(Math.random() * (colorArr.length))

        for (let i = 0; i < sqArr.length; i++) {
            sqArr[i].current.material.color.setHex(colorArr[color])
        }
    }

    const clearTetriminoPositions = () => {
        for (let i = 0; i < sqArr.length; i++) {
            sqArr[i].current.position.x = 0
            sqArr[i].current.position.y = 0
        }
    }

    const positionTetrimino = (tetrimino) => {
        for (let i = 1; i < tetrimino.length; i++) {
            if (tetrimino[i][0] !== 0) sqArr[i].current.position.x += .035 * tetrimino[i][0]
            if (tetrimino[i][1] !== 0) sqArr[i].current.position.y += .035 * tetrimino[i][1]
        }
    }



    return (
        <Suspense>
            {/* <OrbitControls /> */}
            <OrthographicCamera position={[0, 0, 4.3]}>
                <group ref={group}  >
                    <mesh>
                        <Plane ref={sq1} {...args}   >
                            <meshBasicMaterial side={THREE.DoubleSide} ref={colorRef} />
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
            </OrthographicCamera>
        </Suspense >
    )
}

export default Comets;