import React, {Component, useState} from 'react';
import {Text, TextInput, View} from 'react-native';

/**
 * 处理文本输入
 */
export default function PizzaTranslator() {
  const [text, setText] = useState('');
  const [submit, setSubmit] = useState(false)

  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)} // 此函数会在文本变化时被调用
        onSubmitEditing={() => setSubmit(true)}
        defaultValue={text}
      />
      <Text>submit: {submit ? 1 : 0}</Text>
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
}
