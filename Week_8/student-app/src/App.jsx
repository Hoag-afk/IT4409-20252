import { useState } from "react";
import students from "./data/sinhvien.json";
import resultData from "./data/ketqua.json";

//COMPONENT: SearchForm
function SearchForm({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nhập MSSV"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Tìm kiếm</button>
    </form>
  );
}

//COMPONENT: ResultTable
function ResultTable({ student, results }) {
  return (
    <div>
      <h2>Thông tin sinh viên</h2>
      <p><strong>MSSV:</strong> {student.mssv}</p>
      <p><strong>Họ tên:</strong> {student.name}</p>

      <h2>Kết quả học tập</h2>
      <table>
        <thead>
          <tr>
            <th>Môn học</th>
            <th>QT</th>
            <th>CK</th>
            <th>Học kỳ</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.subject}</td>
              <td>{result.qt}</td>
              <td>{result.ck}</td>
              <td>{result.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

//COMPONENT: App
function App() {
  const [student, setStudent] = useState(null);
  const [results, setResults] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSearch = (mssv) => {
    if (!mssv) {
      setError('Vui lòng nhập MSSV.');
      return;
    } 

    setIsLoading(true);
    setError('');
    setResults([]);
    setStudent(null);

    // Simulate an API call
    setTimeout(() => {
      const foundStudent = students.find((s) => s.mssv === mssv);
      if (foundStudent) {
        setStudent(foundStudent);
        const studentResults = resultData.filter((r) => r.mssv === mssv);
        setResults(studentResults);
      } else {
        setError('Không tìm thấy sinh viên với MSSV này.');
        setStudent(null);
        setResults([]);
      }
      setIsLoading(false);
    }, 1500);
  }

  return (
  <div className="container">
    <h1>Tra cứu sinh viên</h1>
    <SearchForm onSearch={handleSearch} />
    {isloading && <p>Đang tải...</p>}
    {error && <p style={{ color: 'red' }}>{error}</p>}
    {student && <ResultTable student={student} results={results} />}  
  </div>
  )
}

export default App;