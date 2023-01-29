import {extendTheme} from '@chakra-ui/react'



export const theme = extendTheme({
   
   colors:{
        gray:{
            "900" : "#0F52BA",
            "800" : "#FFF",
            "700" : "#2C2C2C",
            "600" : "#373737",
            "500" : "#000000",
            "400" : "#797D9A",
            "300" : "#9699B0",
            "200" : "#B3B5C6",
            "100" : "#D1D2DC",
            "50" : "#EEEEF2"
        }
   },
   breakpoints:{
    sm: '20em',
    md: '48em',
    lg: '65em',
  },
   
   fonts:{
        body: `'Montserrat', sans-serif`,
   },

    styles:{
        global:{
            body:{
                bg: 'gray.800',
                color: 'gray.50',
                
            }
        }
    }
})