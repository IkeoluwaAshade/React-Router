import React from 'react'
import styled from 'styled-components'

const FAQ = () => {
  return (
    <Container>
        <Wrapper>
        <DommyText>
              <ParagraphDiv>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sed elementum tempus egestas sed sed risus pretium quam. Ultrices eros in cursus turpis massa tincidunt dui. Varius sit amet mattis vulputate enim nulla. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Dolor sit amet consectetur adipiscing. Nisi scelerisque eu ultrices vitae auctor eu. Vulputate ut pharetra sit amet aliquam id diam. Arcu bibendum at varius vel. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Ultrices vitae auctor eu augue ut lectus arcu. Quam pellentesque nec nam aliquam sem. Facilisi cras fermentum odio eu. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Eget nulla facilisi etiam dignissim diam quis.
              </p>

              <p>
              Id ornare arcu odio ut. Aliquet sagittis id consectetur purus ut. Auctor augue mauris augue neque. Morbi leo urna molestie at. Dui nunc mattis enim ut tellus elementum sagittis vitae. Leo in vitae turpis massa sed elementum tempus egestas sed. Accumsan tortor posuere ac ut consequat. Ante metus dictum at tempor commodo. Quis auctor elit sed vulputate mi sit amet mauris commodo. Varius sit amet mattis vulputate enim nulla aliquet. Amet mattis vulputate enim nulla.
              </p>

              <p>
                Quis viverra nibh cras pulvinar mattis. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Sed libero enim sed faucibus turpis. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Ultricies mi quis hendrerit dolor. Congue nisi vitae suscipit tellus mauris a diam maecenas. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Lectus magna fringilla urna porttitor. Erat pellentesque adipiscing commodo elit at imperdiet dui. Orci sagittis eu volutpat odio. Pretium quam vulputate dignissim suspendisse in est ante. Porttitor lacus luctus accumsan tortor posuere ac. Euismod quis viverra nibh cras. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus.
              </p>
            </ParagraphDiv>
            
          </DommyText>
        </Wrapper>
    </Container>
  )
}

export default FAQ

const Container = styled.div``

const Wrapper = styled.div``

const DommyText = styled.div`
 
  color: purple;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`
const ParagraphDiv = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`