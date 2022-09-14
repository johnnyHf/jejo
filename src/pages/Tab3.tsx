import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Tab3.css';
// @ts-ignore
import * as THREE from 'three';
import {Canvas, ThreeElements, useFrame} from "@react-three/fiber";
import {useRef, useState} from "react";

function Box(props: ThreeElements['mesh']) {
    const mesh = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

const Tab3: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 3</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large"></IonTitle>
                    </IonToolbar>
                </IonHeader>
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    {/*<Box position={[-1.2, 0, 0]} />*/}
                    {/*<Box position={[1.2, 0, 0]} />*/}
                    <mesh visible userData={{ hello: 'world' }}  rotation={[Math.PI / 2, 0, 0]}>
                        <sphereGeometry />
                        <meshStandardMaterial color="hotpink" transparent />
                    </mesh>
                </Canvas>
            </IonContent>
        </IonPage>
    );
};

export default Tab3;
