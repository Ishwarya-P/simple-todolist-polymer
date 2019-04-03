import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';






/**
 * `poly1-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class Poly1Element extends PolymerElement {
  static get template() {
    return html`
    <style>
    div.task{
      display:flex;
      align-items:center;
      
    }

    h4{color:#27AE60;}
paper-input{
  display:inline-block;
  
}
    </style>
    <h3>[[name]]</h3>
    <dom-repeat items="{{tasks}}" as="task" filter="isNotCompleted" observe="completed" >
    <template>

        <div class="task">
            <paper-checkbox checked="{{task.completed}}"></paper-checkbox>
            <paper-input  label="Task name" no-label-float value="{{task.name}}"></paper-input>
            
            </div>

            
    </template>
      

  </dom-repeat>

  <h4>Completed Tasks</h4>
  <dom-repeat items="{{tasks}}" as="task" filter="isCompleted" observe="completed" >
  <template>

      <div class="task">
          <paper-checkbox checked="{{task.completed}}"></paper-checkbox>
          <paper-input  label="Name" no-label-float value="{{task.name}}"></paper-input>
          
          </div>

          
  </template>
    

</dom-repeat>


  <paper-button on-click="addTask">Add</paper-button>
    `;
  }
  static get properties() {
    return {
name:{
type:String,
value:"Daily work list"
},

      tasks:{

        type:Array,
        value:()=>[]
      }
    };
  }
addTask(){
const newTask={
  name:'',
  completed:false
};

this.push('tasks',newTask);

}


isNotCompleted(task){

  return !task.completed;
}

isCompleted(task){

  return task.completed;
}

}

window.customElements.define('poly1-element', Poly1Element);
