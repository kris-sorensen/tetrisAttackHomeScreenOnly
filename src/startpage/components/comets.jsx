import React, { useRef, useState, useEffect, useCallback, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import './styles/comets.css'
import { Plane, OrthographicCamera } from "@react-three/drei";
import { tetriminos } from "./scripts/tetriminos";
import { Group } from 'three';
import { useControls } from 'leva';

// todo: when play is clicked some effect with z happens zooming in on piece until it covers screen. piece would stop? or all the parts of the piece zoom in different directions

const Comets = () => {

    const canvasRef = useRef()

    useEffect(() => {
        // const canvas = canvasRef.current
        // const context = canvas.getContext('2d')
        // //Our first draw
        // context.fillStyle = '#ff0000'
        // context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    }, [])

    return (
        <Canvas ref={canvasRef} id="canvas">
            <Board />
        </Canvas>
    )
}

const Board = props => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [activeTetrimino, setActiveTetrimino] = useState({})
    const sq1 = useRef()
    const sq2 = useRef()
    const sq3 = useRef()
    const sq4 = useRef()
    const group = useRef()
    const colorRef = useRef()



    // pick a random tetrimino
    const pickRandomTetrimino = () => {
        const pick = tetriminos[Math.floor(Math.random() * tetriminos.length)]

    }

    const pickRandomSpot = () => {

    }
    useEffect(() => {
        group.current.position.y = 1
        sq2.current.position.x += .035
        sq3.current.position.x += .035 * 2
        sq4.current.position.x += .035 * 3

    }, [])

    const drop = () => {


        if (group.current.position.y < -1) {
            group.current.position.y = 2
            group.current.position.x = Math.random() * (1 + 1) - 1
            // colorRef.current.color.g = 256
            console.log('x', group.current.position.x)
            console.log('y', group.current.position.y)
            // group.current.position.x = 1
        }
        group.current.position.y -= .016
    }


    useFrame((state, delta) => { //todo: might need to clear canvas each time, add callback to params. can also detect pass canvas width and height into pick place function
        // console.log(state.mouse)
        drop()

    })

    const args = useControls({
        args: {
            label: 'Square Size',
            value: [.035, .035], min: 0, max: 100, step: .1
        },
        position: {
            value: [0, 0, 0], min: 0, max: 100
        }
    })

    const args1 = useControls({
        position: {
            value: [0, 0, 0], min: -10, max: 10, step: .01
        }
    })

    const { color } = useControls({ color: "#f00" });
    const args2 = {
    }
    const args3 = {
    }
    const args4 = {
    }

    const groupArgs = {

    }

    return (
        <Suspense>
            <OrthographicCamera position={[0, 0, 4.3]}>
                <group ref={group} {...groupArgs} >
                    <mesh>
                        <Plane ref={sq1} {...args1} {...args} >
                            <meshBasicMaterial ref={colorRef} color={color} />
                        </Plane>
                    </mesh>
                    <mesh>
                        <Plane ref={sq2} {...args} {...args2}>
                            <meshBasicMaterial ref={colorRef} color={color} />
                        </Plane>
                    </mesh>
                    <mesh>
                        <Plane ref={sq3} {...args}  {...args3} >
                            <meshBasicMaterial ref={colorRef} color={color} />
                        </Plane>
                    </mesh>
                    <mesh>
                        <Plane ref={sq4} {...args} {...args4} >
                            <meshBasicMaterial ref={colorRef} color={color} />
                        </Plane>
                    </mesh>
                </group>
            </OrthographicCamera>
        </Suspense>
    )
}



const clearCanvas = () => {

}

export default Comets;