// actions.js
import {useState, useEffect} from 'react'
import {useDocumentOperation} from 'sanity'
export function SetReviewAction(props) { 
    return {
        label: 'Submit to Review',
        onHandle: async (selection) => {
        // Add your action logic here
          console.log('Hello World Action triggered with selection:', selection);
        }, 
    } 
  }
export function SetApproveAction(props) { 
    return {
        label: 'Approve',
        onHandle: async (selection) => {
          // Add your action logic here
         alert('Hello World Action triggered with selection:', selection);
        }, 
    } 
  }
  const HelloWorldBadge = () => {
  
    return {
      label: 'Hello World Badge',
      title: 'Hello World Badge Title',
    };
  };

  export default HelloWorldBadge;