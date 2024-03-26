import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PopupButton from '../../atoms/CustomButton/PopupButton';
import CheckMark from '../../atoms/CheckMark/CheckMark';
import LinearGradient from 'react-native-linear-gradient';

interface ConfirmationDialogProps {
  task: string;
  successMessage: string;
  navigation: any;
}

const handleCancel = () => {
  console.log('cancel button clicked');
};

const handleDone = ({navigation}: {navigation: any}) => {
  navigation.navigate('Home');
};

const ConfirmationDialogeOne: React.FC<ConfirmationDialogProps> = ({
  task,
  successMessage,
  navigation,
}) => {
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={['#E5F1FE', 'white']}
        start={{x: 0.1, y: 0}}
        end={{x: 0.01, y: 0.7}}
        locations={[0.2, 1.3]}
        style={{
          width: '90%',
          backgroundColor: '#ccdaf7',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#a6acb8',
        }}>
        <View style={styles.dialogueContainer}>
          <CheckMark />
          <View style={styles.textContainer}>
            <Text style={styles.text1}>{task}</Text>
            <Text style={styles.text2}>{successMessage}</Text>
          </View>
          <View style={styles.seperator}></View>
          <View style={styles.btnContainer}>
            <PopupButton
              backgroundColor="rgba(71, 85, 105, 0.2)"
              borderColor="rgba(71, 85, 105, 0.2)"
              text="Done"
              onPress={() => handleDone({navigation})}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogueContainer: {
    paddingTop: 24,
    width: 328,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text1: {
    fontFamily: 'Lato',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: -0.02,
    textAlign: 'center',
    color: 'rgba(42, 51, 62, 1)',
    marginBottom: 24,
  },
  text2: {
    fontFamily: 'Lato',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'center',
    color: 'rgba(42, 51, 62, 1)',
    marginBottom: 18,
  },
  textContainer: {
    marginTop: 24,
  },
  seperator: {
    backgroundColor: 'rgba(148, 163, 184, 1)',
    height: 1,
    width: 328,
  },
  btnContainer: {
    marginVertical: 16,
  },

  btnSeperator: {
    backgroundColor: 'rgba(148, 163, 184, 1)',
    height: 70,
    width: 1,
  },
});

export default ConfirmationDialogeOne;
