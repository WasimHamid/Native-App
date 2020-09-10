import React from "react";
import {
    Image, Linking
} from "react-native";
import {
    Container, Content, Card, CardItem,
    Text, Button, Icon, Left, Body, Right
}
    from 'native-base';

class Explore extends React.Component {

    state = {
        likes: 10
    };

    addLike = () => {
        let newCount = this.state.likes + 1;
        this.setState({
            likes: newCount
        });
    };

    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Playermade</Text>
                                    <Text note>www.playermade.club</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require("../assets/Playermade.png")} style={{ height: 400, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent onPress={() => this.addLike()}>
                                    <Icon active name="thumbs-up" />
                                </Button>
                                <Text>{this.state.likes}</Text>
                            </Left>
                            <Body>
                                <Button transparent>
                                    <Icon active name="heart" style={{ color: 'red' }} />
                                </Button>
                            </Body>
                            <Right>
                                <Text style={{ color: 'blue', textDecorationLine: 'underline' }}
                                    onPress={() => Linking.openURL('http://playermade.club')}>
                                    Check it Out
                                </Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default Explore;