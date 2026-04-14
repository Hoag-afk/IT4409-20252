Ứng dụng gồm 3 component chính: App, SearchForm và ResultTable.
Trong đó, component App là nơi quản lý toàn bộ state của ứng dụng như: thông tin sinh viên, kết quả học tập, trạng thái loading và lỗi.
SearchForm chỉ dùng để nhập MSSV và gửi yêu cầu tra cứu lên App thông qua props.
ResultTable nhận dữ liệu từ App và hiển thị thông tin sinh viên cùng bảng kết quả học tập.

Hook useEffect được kích hoạt khi giá trị MSSV (studentId) thay đổi sau khi người dùng thực hiện tra cứu.
Khi đó, useEffect sẽ thực hiện việc giả lập gọi dữ liệu (bằng setTimeout hoặc fetch), cập nhật trạng thái loading và xử lý kết quả trả về.
Sau khi hoàn tất, dữ liệu sẽ được hiển thị hoặc thông báo lỗi nếu không tìm thấy sinh viên.
