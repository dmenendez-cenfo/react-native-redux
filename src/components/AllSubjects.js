import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {selectSubject} from '../actions/Subject/SubjectActions';

const AllSubjects = ({subjects}) => {
  const dispatch = useDispatch();
  const onPressSubject = subjectName => {
    dispatch(selectSubject(subjectName));
  };

  return (
    <View>
      <Text>All subjects</Text>
      {subjects.allSubjects.map((subject, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => onPressSubject(subject)}>
          <Text>Agregar {subject}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    subjects: state.subjects,
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

export default connect(mapStateToProps)(AllSubjects);
