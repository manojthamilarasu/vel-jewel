import { useState } from 'react';


import { NativeBaseProvider, VStack, Input, Box, extendTheme, Heading, Checkbox, Icon, HStack, Text, Select, View, ScrollView } from "native-base";
import { StatusBar, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const newColorTheme = {
    brand: {
        900: "#8287af",
        800: "#7c83db",
        700: "#b3bef6",
    },
};
const theme = extendTheme({ colors: newColorTheme });

const BasePage = ({ navigation }) => {

    const [normalOld, setNormalOld] = useState(false)
    const [m80Old, setM80Old] = useState(false)
    const [m90Old, setM90Old] = useState(false)
    const [normalOldSigma, setNormalOldSigma] = useState("78")
    const [normalOldWt, setNormalOldWt] = useState("")
    const [m80OldWt, setM80OldWt] = useState("")
    const [m90OldWt, setM90OldWt] = useState("")
    const [m80OldSigma, setM80OldSigma] = useState("78")
    const [m90OldSigma, setM90OldSigma] = useState("78")

    return (
        <NativeBaseProvider  theme={theme}>
            <StatusBar />
            <Box style={{ paddingBottom: 40 }} safeArea>
                <ScrollView >
                    
                <VStack safeAreaBottom space={4} w="75%" maxW="300px" mx="auto">
                    <Heading style={{ paddingTop: 20 }}>New Silver</Heading>
                    <Input size="lg" variant="underlined" placeholder="Enter gms" keyboardType='numeric' />
                    <Heading style={{ paddingTop: 20 }}>Old Silver</Heading>
                    {/* <Input size="lg" variant="underlined" placeholder="Old Silver" /> */}
                    <HStack space={2} alignItems="flex-start">
                        <Checkbox onChange={() => { setNormalOld(!normalOld) }} value="normalOld" >
                            Normal Old
                        </Checkbox>
                        <Checkbox onChange={() => { setM80Old(!m80Old) }} value="m80Old" >
                            M80
                        </Checkbox>
                        <Checkbox onChange={() => { setM90Old(!m90Old) }} value="m90Old" >
                            M90
                        </Checkbox>
                    </HStack>

                    {normalOld &&
                        <View>
                            <Text style={{ paddingTop: 20, fontWeight: 'bold' }}>Normal Old</Text>
                            
                            <HStack space={2} alignItems="center">
                                <Text>Weight:</Text>
                                <View style={{ paddingLeft: 40, paddingBottom:10 }}>
                                    <TextInput
                                        style={{
                                            width: 147, borderBottomColor: '#000', borderBottomWidth: 1
                                        }}
                                        value={normalOldWt}
                                        onChangeText={setNormalOldWt}
                                        placeholder="Enter value"
                                        keyboardType="numeric"
                                    />
                                </View>
                            </HStack>
                            <HStack space={2} alignItems="center">
                                <Text>Sigma Value: </Text>
                                <Select selectedValue={normalOldSigma} minWidth="150" accessibilityLabel="78" placeholder="Choose" _selectedItem={{
                                    bg: "teal.600",

                                }} mt={1} onValueChange={itemValue => setNormalOldSigma(itemValue)}>
                                    <Select.Item label="78" value="78" />
                                    <Select.Item label="79" value="79" />
                                    <Select.Item label="80" value="80" />
                                    <Select.Item label="81" value="81" />
                                    <Select.Item label="82" value="82" />
                                </Select>
                                <Text >(OR)</Text>
                            </HStack>
                            <View style={{ paddingLeft: 95, paddingTop: 20 }}>
                                <TextInput
                                    style={{
                                        width: 147, borderBottomColor: '#000', borderBottomWidth: 1
                                    }}
                                    value={normalOldSigma}
                                    onChangeText={setNormalOldSigma}
                                    placeholder="Enter value"
                                    keyboardType="numeric"
                                />
                            </View>
                        </View>
                    }

                    {m80Old &&
                        <View>
                            <Text style={{ paddingTop: 20, fontWeight: 'bold' }}>M80 Old</Text>
                            <HStack space={2} alignItems="center">
                                <Text>Weight:</Text>
                                <View style={{ paddingLeft: 40, paddingBottom: 10 }}>
                                    <TextInput
                                        style={{
                                            width: 147, borderBottomColor: '#000', borderBottomWidth: 1
                                        }}
                                        value={m80OldWt}
                                        onChangeText={setM80OldWt}
                                        placeholder="Enter value"
                                        keyboardType="numeric"
                                    />
                                </View>
                            </HStack>
                            <HStack space={2} alignItems="center">
                                <Text>Sigma Value: </Text>
                                <Select selectedValue={m80OldSigma} minWidth="150" accessibilityLabel="78" placeholder="Choose" _selectedItem={{
                                    bg: "teal.600",

                                }} mt={1} onValueChange={itemValue => setM80OldSigma(itemValue)}>
                                    <Select.Item label="78" value="78" />
                                    <Select.Item label="79" value="79" />
                                    <Select.Item label="80" value="80" />
                                    <Select.Item label="81" value="81" />
                                    <Select.Item label="82" value="82" />
                                </Select>
                                <Text >(OR)</Text>
                            </HStack>
                            <View style={{ paddingLeft: 95, paddingTop: 20 }}>
                                <TextInput
                                    style={{
                                        width: 147, borderBottomColor: '#000', borderBottomWidth: 1
                                    }}
                                    placeholder="Enter value"
                                    keyboardType="numeric"
                                    value={m80OldSigma}
                                    onChangeText={setM80OldSigma}
                                />
                            </View>
                        </View>
                    }

                    {m90Old &&
                        <View>
                            <Text style={{ paddingTop: 20, fontWeight:'bold' }}>M90 Old</Text>
                            <HStack space={2} alignItems="center">
                                <Text>Weight:</Text>
                                <View style={{ paddingLeft: 40, paddingBottom: 10 }}>
                                    <TextInput
                                        style={{
                                            width: 147, borderBottomColor: '#000', borderBottomWidth: 1
                                        }}
                                        value={m90OldWt}
                                        onChangeText={setM90OldWt}
                                        placeholder="Enter value"
                                        keyboardType="numeric"
                                    />
                                </View>
                            </HStack>
                            <HStack space={2} alignItems="center">
                                <Text>Sigma Value: </Text>
                                <Select selectedValue={m90OldSigma} minWidth="150" accessibilityLabel="78" placeholder="Choose" _selectedItem={{
                                    bg: "teal.600",

                                }} mt={1} onValueChange={itemValue => setM90OldSigma(itemValue)}>
                                    <Select.Item label="78" value="78" />
                                    <Select.Item label="79" value="79" />
                                    <Select.Item label="80" value="80" />
                                    <Select.Item label="81" value="81" />
                                    <Select.Item label="82" value="82" />
                                </Select>
                                <Text >(OR)</Text>
                            </HStack>
                            <View style={{ paddingLeft: 95, paddingTop: 20 }}>
                                <TextInput
                                    style={{
                                        width: 147, borderBottomColor: '#000', borderBottomWidth: 1
                                    }}
                                    placeholder="Enter value"
                                    keyboardType="numeric"
                                    value={m90OldSigma}
                                    onChangeText={setM90OldSigma}
                                />
                            </View>
                        </View>
                    }
                    </VStack>
                </ScrollView>
            </Box>
        </NativeBaseProvider>
    );
};


export default BasePage;