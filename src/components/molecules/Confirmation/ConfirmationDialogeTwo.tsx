import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PopupButton from '../../atoms/CustomButton/PopupButton';
import CheckMark from '../../atoms/CheckMark/CheckMark';

interface ConfirmationDialogProps {
  task: string;
  successMessage: string;
}

const handleCancel = () => {
  console.log('cancel button clicked');
};

const handleDone = () => {
  console.log('done button clicked');
};

const ConfirmationDialogeTwo: React.FC<ConfirmationDialogProps> = ({
  task,
  successMessage,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.dialogueContainer}>
        <CheckMark />
        <View style={styles.textContainer}>
          <Text style={styles.text1}>{task}</Text>
          <Text style={styles.text2}>{successMessage}</Text>
        </View>
        <View style={styles.seperator}></View>
        <View style={styles.btnContainer}>
          <PopupButton
            backgroundColor="white"
            borderColor="white"
            text="Cancel"
            onPress={handleCancel}
          />
          <View style={styles.btnSeperator}></View>
          <PopupButton
            backgroundColor="rgba(71, 85, 105, 0.2)"
            borderColor="rgba(71, 85, 105, 0.2)"
            text="Done"
            onPress={handleDone}
          />
        </View>
      </View>
    </View>
  );
};

export default ConfirmationDialogeTwo;

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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },

  btnSeperator: {
    backgroundColor: 'rgba(148, 163, 184, 1)',
    height: 70,
    width: 1,
  },
});
