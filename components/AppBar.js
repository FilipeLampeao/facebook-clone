import React from 'react'
import styled from 'styled-components/native'
import{Feather, MaterialCommunityIcons} from '@expo/vector-icons'

const Container = styled.View`
    width: 100%;
    height: 60px;
    padding: 0 11x;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

`
const text = styled.Text`
    color: #3a86e9;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: -0.3px;
`
const Row = styled.View`
    flex-direction: row;
`
const Button = styled.TouchableOpacity`
    width: 42px;
    height: 42px;
    border-radius: 21px;
    background: #eeeeee;
    align-items: center;
    justify-content: center;
    margin-left: 16px;
`


const AppBar = () =>{
    return(
        <Container>
            <Text>facebook</Text>
            <Row>
                <Button>
                    <Feather 
                        name="search"
                        size={29}
                        color="#000"
                    />
                </Button>
                <Button>
                    <MaterialCommunityIcons
                        name="facebook-messenger"
                        size={27}
                    />
                </Button>
            </Row>
        </Container>
    );

};

export default AppBar;