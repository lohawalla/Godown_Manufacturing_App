import { FlatList, Text, TouchableOpacity, View } from "react-native";

const DataComponent = ({ data, setValue, bottomSheetModalRef }: { data: any, image: any, setValue: any, bottomSheetModalRef: any }) => {
    const renderItem = ({ item: user }: { item: any }) => (
        <TouchableOpacity style={{ margin: 20, borderWidth: 1, padding: 18, borderRadius: 5 }} onPress={() => { data.name == 'aisle' ? (setValue((prev: any) => ({ ...prev, aisle: user.name })), bottomSheetModalRef.current.close()) : (setValue((prev: any) => ({ ...prev, shelf: user.name })), bottomSheetModalRef.current.close()) }}>
            <Text style={{ color: 'black', textAlign: 'left' }} >{`${user.name}`}</Text>
        </TouchableOpacity>
    );
    return (
        <View>
            <FlatList data={data.data} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} />
        </View>
    );
};
export default DataComponent;