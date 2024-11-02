import * as React from "react";
import { Dimensions } from "react-native";
import { Canvas, RadialGradient, Rect, Blur } from "@shopify/react-native-skia"; 


export function BackGround(){
    const {width: windowWidth, height:windowHeight} = Dimensions.get('window');
   
    return(

        <Canvas style={{flex : 1}}>
            <Rect x={0} y={0} width={windowWidth} height={windowHeight}>
                <RadialGradient  c={{x:windowWidth/2, y:windowHeight/2}}
                 r={windowWidth/2}
                 colors={['violet', 'black']}/>
                 <Blur blur={0}/>
            </Rect>
        </Canvas>

    )
}