import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [form, setForm] = useState([])

  const studentName = useRef(null)
  const grade = useRef(null)
  const assignment = useRef(null)

  // Function to update list of student data
  const handleSubmit = event => {
    event.preventDefault()
    
    setForm([...form, {
      'name': studentName.current.value,
      'assignment': assignment.current.value,
      'grade': grade.current.value}])

    studentName.current.value = ''
    grade.current.value = ''
    assignment.current.value = ''
  }

  // Function to display new data in the table
  const displayList = () => {
    return form.map((row, index) => (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.assignment}</td>
        <td>{row.grade}</td>
      </tr>
    ));
  }

  return (
    <>
      <div className="App">
        <h1>Gradebook</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={studentName} placeholder='Student name' />
          <input type="text" ref={assignment} placeholder='Assignment' />
          <input type="number" ref={grade} placeholder='Student grade'/>
          <input type="submit" value='Submit Form' />
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Assignment</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {displayList()}
        </tbody>
      </table>
    </>
  );
}

export default App;
