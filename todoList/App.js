import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

      <View style={styles.tasksWrapper}>
        
        <Text style={styles.sectionTitle}>Today's Task</Text>

        <View style={styles.Items}>
          {/* Tasks will go here */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>

      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        style= {styles.writeTaskWrapper}>
        
          <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
          
          <TouchableOpacity onPress={() => handleAddTask()} >
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>

        </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c5cfd4',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  Items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: 'lightblue',
    borderWidth: 1
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightblue',
    borderWidth: 1
  },
  addText: {

  }
});
