"use client"; //here we are using the directive for Next.js to ensure this module is a client-side only

import React, { useState, useRef, Suspense } from "react"; //we are importing the necessary React hooks and Suspense for the lazy loading
import { Canvas, useFrame } from "@react-three/fiber"; //we are here importing components from react-three/fiber for 3D rendering
import { Points, PointMaterial, Preload } from "@react-three/drei"; //to import Points and PointMaterial for creating and styling 3D points, and Preload for preloading assets
//the ts ignore is used as a helper from maath library, to ignore typsript errors for the next import line


// @ts-ignore 
import * as random from "maath/random/dist/maath-random.esm"; //this library is used to provide mathematical functions and utilities for operations
//in our case using the maath/random module allows you to efficiently and effectively create a visually appealing random star field by generating coordinates for each star within a 3D sphere, making the scene dynamic and realistic

//this StarBackground component generates a randomly star-like background
const StarBackground = (props: any) => {
  const ref: any = useRef();   //the useRef is used to keep a mutable reference to the point cloud
  //here we are using the useState to initialize the positions of points within a sphere
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );
//the useFrame hook from react-three/fiber to update the rotation of the point cloud every frame
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta/10; //this line rotates the point cloud on x-axis
    ref.current.rotation.y -= delta/15; //and this one rotates the point cloud on y-axis
  })

//here we are returning the visual representation of stars using Points
  return (
    <group rotation={[0,0, Math.PI / 4]}> {/*we are setting initial group rotation*/}
        <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
        >
            <PointMaterial
                transparent
                color="$fff"
                size={0.002}
                sizeAttenuation={true}
                dethWrite={false} //ensuring that points do not interfere with depth calculations
            />
        </Points>
    </group>
  )
};

//this StarsCanvas component sets up a Canvas for 3D rendering
const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[20]"> 
        <Canvas camera={{position: [0, 0, 1]}}> {/*setup the camera position for the canvas*/}
        <Suspense fallback={null}> {/*this suspense is used to handle the loading state of components*/}
            <StarBackground /> {/*the one is including the StarBackground component within the Canvas*/}
        </Suspense>
        </Canvas>
    </div>
)

export default StarsCanvas;