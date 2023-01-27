/** @format */

import styled from 'styled-components'
import PlaneIcon from '../assets/plane.png'
import MailIcon from '../assets/mail.png'
import BoxIcon from '../assets/box.png'

function Animation() {
  return (
    <div>
      <Plane src={PlaneIcon} />
      <Mail src={MailIcon} />
      <Box src={BoxIcon} />
    </div>
  )
}

export default Animation

const Plane = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 300px;
  left: -100px;
  z-index: -1;
  animation: plane 25s linear alternate infinite;

  @keyframes plane {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`

const Mail = styled.img`
  width: 60px;
  height: 40px;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;
  animation: mail 25s linear alternate infinite;

  @keyframes mail {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`

const Box = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 400px;
  left: -50px;
  z-index: -1;
  animation: box 25s linear alternate infinite;

  @keyframes box {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`

// const Square = styled.div`
//   width: 60px;
//   height: 60px;
//   background-color: #213a8f;
//   opacity: 0.7;
//   position: absolute;
//   top: -60px;
//   left: -60px;
//   z-index: -1;
//   animation: square 25s linear alternate infinite;

//   @keyframes square {
//     to {
//       transform: translate(100vw, 100vh);
//     }
//   }
// `

// const Circle = styled.div`
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
//   background-color: #ff9124;
//   position: absolute;
//   top: 200px;
//   left: -100px;
//   z-index: -1;
//   animation: circle 25s linear alternate infinite;

//   @keyframes circle {
//     to {
//       transform: translate(100vw, -100vh);
//     }
//   }
// `

// const Rectangle = styled.div`
//   width: 50px;
//   height: 100px;
//   background-color: #669966;
//   opacity: 0.5;
//   position: absolute;
//   top: 400px;
//   left: -50px;
//   z-index: -1;
//   animation: rectangle 25s linear alternate infinite;

//   @keyframes rectangle {
//     to {
//       transform: translate(100vw, -50vh);
//     }
//   }
// `
