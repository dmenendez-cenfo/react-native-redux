import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {unselectSubject} from '../actions/Subject/SubjectActions';

const SelectedSubjects = ({subjects}) => {
  const dispatch = useDispatch();
  const onPressSubject = subjectName => {
    dispatch(unselectSubject(subjectName));
  };
  return (
    <View>
      <Text>Selected subjects</Text>
      {subjects.selectedSubjects.map((subject, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => onPressSubject(subject)}>
          <Text>Remover {subject}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const mapStateToProps = ({subjects, users}) => {
  return {
    subjects,
  };
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
  },
});

export default connect(mapStateToProps)(SelectedSubjects);
