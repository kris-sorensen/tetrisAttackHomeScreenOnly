import React, { useRef, useState, useEffect, useCallback, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import './styles/comets.css'
import { Plane, OrthographicCamera } from "@react-three/drei";
import { tetriminos } from "./scripts/tetriminos";
import { Group } from 'three';
import { useControls } from 'leva';

// todo: when play is clicked some effect with z happens zooming in on piece until it covers screen. piece would stop? or all the parts of the piece zoom in different directions

// TODO: 
/***
 * // Tetrimino right cordinates
 *  Fix overlay. make it size with scaling window. mobile friendly
 * mobile controls 
 * 1 player mode (only option mobile)
 */


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
    const sqArr = [sq1, sq2, sq3, sq4]
    const colorArr = ['0x6bb9a2', '0xff6ca6', '0xff9677', '0xf9f871', '0x00aeef', '0xba74fc', '0xec64da']



    // pick a random tetrimino
    const pickTetrimino = () => {
        return tetriminos[Math.floor(Math.random() * tetriminos.length)]

    }


    useEffect(() => {
        group.current.position.y = -2
        // sq2.current.position.x += .035
        // sq3.current.position.x += .035 * 2
        // sq4.current.position.x += .035 * 3

    }, [])

    let speed = 1
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
        group.current.position.y -= .015 * speed
    }

    const newTetrimino = () => {
        const activeTetrimino = pickTetrimino()
        // colorRef.current.color = colorArr[3]
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


    useFrame((state, delta) => { //todo: might need to clear canvas each time, add callback to params. can also detect pass canvas width and height into pick place function
        // console.log(state.mouse)
        if (canDrop) drop()

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
                            <meshBasicMaterial ref={colorRef} />
                        </Plane>
                    </mesh>
                    <mesh>
                        <Plane ref={sq2} {...args} {...args2}>
                            <meshBasicMaterial ref={colorRef} />
                        </Plane>
                    </mesh>
                    <mesh>
                        <Plane ref={sq3} {...args}  {...args3} >
                            <meshBasicMaterial ref={colorRef} />
                        </Plane>
                    </mesh>
                    <mesh>
                        <Plane ref={sq4} {...args} {...args4} >
                            <meshBasicMaterial ref={colorRef} />
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