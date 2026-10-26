/* Dữ liệu khóa học: 6 chương, mỗi chương có lý thuyết + 3 bài tập (dễ -> khó) kèm lời giải và tiêu chí chấm. */
(function (root) {
  'use strict';
  const C = String.raw; // giữ nguyên ký tự '\' trong mã C++

  const LEVELS = { 1: 'Dễ', 2: 'Trung bình', 3: 'Khó' };

  const CHAPTERS = [
    /* ===================================================== CHƯƠNG 1 */
    {
      id: 1,
      icon: '⌨',
      title: 'Nhập môn C++, biến và nhập xuất',
      summary: 'Làm quen cấu trúc chương trình, kiểu dữ liệu cơ bản, cin/cout và các phép toán.',
      theory: [
        {
          title: 'Cấu trúc một chương trình C++',
          html: '<p>Mỗi chương trình C++ bắt đầu thực thi từ hàm <code>main()</code>. Thư viện được khai báo bằng <code>#include</code>. Dòng <code>using namespace std;</code> cho phép dùng <code>cout</code>, <code>cin</code> mà không cần viết tiền tố <code>std::</code>.</p><p>Mỗi câu lệnh kết thúc bằng dấu chấm phẩy <code>;</code>. Khối lệnh nằm trong cặp ngoặc nhọn <code>{ }</code>. Chú thích dùng <code>//</code> (một dòng) hoặc <code>/* ... */</code> (nhiều dòng).</p>',
          code: C`#include <iostream>   // thư viện nhập xuất
using namespace std;

int main() {
    // In một dòng chữ ra màn hình
    cout << "Xin chao C++!" << endl;
    return 0;            // kết thúc chương trình thành công
}`
        },
        {
          title: 'Biến và kiểu dữ liệu',
          html: '<p>Biến là vùng nhớ có tên dùng để lưu dữ liệu. Phải khai báo kiểu trước khi dùng. Các kiểu thường gặp:</p><ul><li><code>int</code>: số nguyên 4 byte (khoảng ±2,1 tỷ).</li><li><code>long long</code>: số nguyên 8 byte, dùng khi giá trị lớn (tổng, giai thừa...).</li><li><code>float</code>, <code>double</code>: số thực (<code>double</code> chính xác hơn, nên ưu tiên).</li><li><code>char</code>: một ký tự, viết trong nháy đơn như <code>\'A\'</code>.</li><li><code>bool</code>: <code>true</code> hoặc <code>false</code>.</li><li><code>string</code>: chuỗi ký tự (cần <code>#include &lt;string&gt;</code>).</li></ul><p><b>Quy tắc đặt tên:</b> bắt đầu bằng chữ cái hoặc <code>_</code>, phân biệt hoa thường, không trùng từ khóa. Nên đặt tên có nghĩa như <code>tongDiem</code>, <code>soLuong</code>.</p>',
          code: C`int tuoi = 20;
long long tong = 1000000000LL * 5;
double diemTB = 8.75;
char xepLoai = 'A';
bool dau = true;
string ten = "Nguyen Van A";
const double PI = 3.14159;   // hằng số không đổi`
        },
        {
          title: 'Nhập xuất dữ liệu',
          html: '<p><code>cout &lt;&lt;</code> in dữ liệu ra màn hình, <code>cin &gt;&gt;</code> đọc dữ liệu từ bàn phím. Có thể nối nhiều giá trị trong một câu lệnh. <code>endl</code> xuống dòng (hoặc dùng <code>\'\\n\'</code>).</p><p>Để định dạng số thực, dùng <code>#include &lt;iomanip&gt;</code>: <code>fixed &lt;&lt; setprecision(2)</code> in đúng 2 chữ số sau dấu phẩy. Muốn đọc cả dòng có khoảng trắng, dùng <code>getline(cin, s)</code>.</p>',
          code: C`#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int a;
    double b;
    cout << "Nhap a va b: ";
    cin >> a >> b;
    cout << "a = " << a << ", b = " << b << endl;
    cout << fixed << setprecision(2) << b << endl;  // 2 chữ số thập phân
    return 0;
}`
        },
        {
          title: 'Toán tử và ép kiểu',
          html: '<ul><li>Số học: <code>+ - * / %</code>. Phép <code>%</code> (chia lấy dư) chỉ dùng cho số nguyên.</li><li>Gán rút gọn: <code>+= -= *= /= %=</code>; tăng giảm: <code>++ --</code>.</li><li>So sánh: <code>== != &lt; &gt; &lt;= &gt;=</code>; logic: <code>&amp;&amp; || !</code>.</li></ul><p class="warn"><b>Lưu ý:</b> chia hai số nguyên cho kết quả nguyên: <code>5 / 2 = 2</code>. Muốn kết quả thực phải ép kiểu: <code>(double)5 / 2 = 2.5</code>.</p>',
          code: C`int a = 7, b = 2;
cout << a / b << endl;            // 3   (chia nguyên)
cout << a % b << endl;            // 1   (dư)
cout << (double)a / b << endl;    // 3.5 (ép kiểu)
a += 3;                           // a = 10
a++;                              // a = 11`
        }
      ],
      exercises: [
        {
          id: '1.1', level: 1,
          title: 'Hello, C++!',
          statement: '<p>Viết chương trình in ra màn hình hai dòng: dòng thứ nhất là <code>Hello, C++!</code>, dòng thứ hai là họ tên của bạn.</p>',
          sampleIn: '(không có dữ liệu vào)',
          sampleOut: 'Hello, C++!\nNguyen Van A',
          solution: C`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++!" << endl;
    cout << "Nguyen Van A" << endl;
    return 0;
}`,
          explain: '<p>Dùng <code>cout</code> với toán tử <code>&lt;&lt;</code> để in. Mỗi <code>endl</code> kết thúc một dòng. Chú ý chuỗi nằm trong dấu nháy kép và mỗi lệnh kết thúc bằng <code>;</code>.</p>',
          checks: [
            { label: 'Khai báo thư viện <iostream>', re: /#\s*include\s*<\s*iostream\s*>|<bits\/stdc\+\+\.h>/, pts: 1.5 },
            { label: 'Dùng cout để in ra màn hình', re: /cout\s*<</, pts: 2 },
            { label: 'In đúng nội dung "Hello, C++!"', re: /"Hello, C\+\+!"/, pts: 3 },
            { label: 'In thêm dòng thứ hai (họ tên)', re: /cout[\s\S]*?;[\s\S]*cout\s*<</, pts: 1.5 }
          ]
        },
        {
          id: '1.2', level: 1,
          title: 'Bốn phép tính của hai số nguyên',
          statement: '<p>Nhập hai số nguyên <code>a</code>, <code>b</code>. In ra tổng, hiệu, tích và thương (số thực, 2 chữ số thập phân) của chúng. Nếu <code>b = 0</code> thì báo không chia được.</p>',
          sampleIn: '7 2',
          sampleOut: 'Tong = 9\nHieu = 5\nTich = 14\nThuong = 3.50',
          solution: C`#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int a, b;
    cout << "Nhap a, b: ";
    cin >> a >> b;
    cout << "Tong = " << a + b << endl;
    cout << "Hieu = " << a - b << endl;
    cout << "Tich = " << a * b << endl;
    if (b != 0)
        cout << "Thuong = " << fixed << setprecision(2) << (double)a / b << endl;
    else
        cout << "Khong chia duoc cho 0" << endl;
    return 0;
}`,
          explain: '<p>Phải ép kiểu <code>(double)a / b</code> để không bị chia nguyên (7/2 sẽ ra 3 thay vì 3.5). Luôn kiểm tra mẫu số khác 0 trước khi chia.</p>',
          checks: [
            { label: 'Đọc hai số bằng cin', re: /cin\s*>>\s*\w+\s*>>\s*\w+|cin\s*>>[\s\S]*cin\s*>>/, pts: 1.5 },
            { label: 'Tính tổng a + b', re: /[A-Za-z_]\w*\s*\+\s*[A-Za-z_]\w*/, pts: 1 },
            { label: 'Tính hiệu a - b', re: /[A-Za-z_]\w*\s*-\s*[A-Za-z_]\w*/, pts: 1 },
            { label: 'Tính tích a * b', re: /[A-Za-z_]\w*\s*\*\s*[A-Za-z_]\w*/, pts: 1 },
            { label: 'Ép kiểu số thực khi chia', re: /\(\s*(double|float)\s*\)\s*\w+\s*\/|\w+\s*\/\s*\(\s*(double|float)\s*\)|static_cast\s*<\s*(double|float)\s*>|1\.0\s*\*/, pts: 2 },
            { label: 'Kiểm tra mẫu số khác 0', re: /!=\s*0|==\s*0/, pts: 1.5 }
          ]
        },
        {
          id: '1.3', level: 2,
          title: 'Chu vi và diện tích hình tròn',
          statement: '<p>Nhập bán kính <code>r</code> (số thực). Tính và in chu vi <code>C = 2πr</code> và diện tích <code>S = πr²</code>, làm tròn đến 2 chữ số thập phân. Lấy π ≈ 3.14159.</p>',
          sampleIn: '2.5',
          sampleOut: 'Chu vi = 15.71\nDien tich = 19.63',
          solution: C`#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    const double PI = 3.14159265;
    double r;
    cin >> r;
    double chuVi = 2 * PI * r;
    double dienTich = PI * r * r;
    cout << fixed << setprecision(2);
    cout << "Chu vi = " << chuVi << endl;
    cout << "Dien tich = " << dienTich << endl;
    return 0;
}`,
          explain: '<p>Dùng kiểu <code>double</code> cho số thực, khai báo π bằng <code>const</code>. <code>fixed &lt;&lt; setprecision(2)</code> chỉ cần đặt một lần, các lần in sau đều được áp dụng.</p>',
          checks: [
            { label: 'Dùng kiểu số thực (double/float)', re: /\bdouble\b|\bfloat\b/, pts: 1 },
            { label: 'Đọc bán kính bằng cin', re: /cin\s*>>/, pts: 1 },
            { label: 'Khai báo hằng số π (3.14.../M_PI)', re: /3\.14|M_PI|acos\s*\(\s*-\s*1/, pts: 1.5 },
            { label: 'Công thức chu vi 2·π·r', re: /2\s*\*\s*\w+\s*\*\s*\w+|\w+\s*\*\s*2\s*\*\s*\w+|\w+\s*\*\s*\w+\s*\*\s*2\b/, pts: 1.5 },
            { label: 'Công thức diện tích π·r·r', re: /(\w+)\s*\*\s*\1\s*\*\s*\w+|\w+\s*\*\s*(\w+)\s*\*\s*\2|pow\s*\(\s*\w+\s*,\s*2\s*\)/, pts: 1.5 },
            { label: 'Định dạng 2 chữ số thập phân', re: /fixed[\s\S]*setprecision\s*\(\s*2\s*\)|setprecision\s*\(\s*2\s*\)[\s\S]*fixed|printf\s*\([^)]*%\.2f/, pts: 1.5 }
          ]
        }
      ]
    },

    /* ===================================================== CHƯƠNG 2 */
    {
      id: 2,
      icon: '⑂',
      title: 'Cấu trúc rẽ nhánh',
      summary: 'if - else, điều kiện kết hợp, switch và toán tử ba ngôi để chương trình biết "lựa chọn".',
      theory: [
        {
          title: 'Câu lệnh if – else',
          html: '<p>Cho phép thực hiện khối lệnh tùy theo điều kiện đúng hay sai. Có thể nối nhiều nhánh bằng <code>else if</code>. Điều kiện luôn nằm trong cặp ngoặc tròn; nếu khối lệnh có nhiều hơn một câu lệnh, phải đặt trong <code>{ }</code>.</p>',
          code: C`int diem;
cin >> diem;
if (diem >= 8) {
    cout << "Gioi" << endl;
} else if (diem >= 6.5) {
    cout << "Kha" << endl;
} else if (diem >= 5) {
    cout << "Trung binh" << endl;
} else {
    cout << "Yeu" << endl;
}`
        },
        {
          title: 'Điều kiện kết hợp và so sánh số thực',
          html: '<p>Kết hợp điều kiện bằng <code>&amp;&amp;</code> (và), <code>||</code> (hoặc), <code>!</code> (phủ định). Ví dụ năm nhuận: chia hết cho 4 mà không chia hết cho 100, hoặc chia hết cho 400.</p><p class="warn"><b>Lưu ý:</b> số thực lưu gần đúng, không nên so sánh <code>==</code> trực tiếp mà dùng sai số: <code>fabs(x - y) &lt; 1e-9</code>.</p>',
          code: C`bool nhuan = (nam % 4 == 0 && nam % 100 != 0) || (nam % 400 == 0);

if (fabs(x - y) < 1e-9) {
    cout << "x bang y" << endl;
}`
        },
        {
          title: 'Câu lệnh switch',
          html: '<p>Dùng khi chọn một trong nhiều giá trị <b>rời rạc</b> (số nguyên hoặc ký tự). Mỗi <code>case</code> thường kết thúc bằng <code>break</code>, nếu quên chương trình sẽ chạy tiếp sang case kế tiếp. <code>default</code> xử lý các giá trị còn lại.</p>',
          code: C`int thu;
cin >> thu;
switch (thu) {
    case 2: cout << "Thu hai" << endl; break;
    case 3: cout << "Thu ba"  << endl; break;
    case 7: cout << "Thu bay" << endl; break;
    default: cout << "Khong hop le" << endl;
}`
        },
        {
          title: 'Toán tử ba ngôi',
          html: '<p>Dạng rút gọn của if-else khi chỉ cần chọn một giá trị: <code>điều_kiện ? giá_trị_đúng : giá_trị_sai</code>. Nên dùng cho biểu thức ngắn gọn, tránh lồng nhau quá nhiều gây khó đọc.</p>',
          code: C`int max = (a > b) ? a : b;
cout << (n % 2 == 0 ? "Chan" : "Le") << endl;`
        }
      ],
      exercises: [
        {
          id: '2.1', level: 1,
          title: 'Số chẵn hay số lẻ',
          statement: '<p>Nhập một số nguyên <code>n</code>. In ra <code>Chan</code> nếu n chẵn, ngược lại in <code>Le</code>.</p>',
          sampleIn: '7',
          sampleOut: 'Le',
          solution: C`#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    if (n % 2 == 0)
        cout << "Chan" << endl;
    else
        cout << "Le" << endl;
    return 0;
}`,
          explain: '<p>Số chẵn là số chia hết cho 2, tức là <code>n % 2 == 0</code>. Với số âm, phép <code>%</code> có thể cho <code>-1</code> nên kiểm tra <code>== 0</code> là cách an toàn nhất (thay vì <code>== 1</code>).</p>',
          checks: [
            { label: 'Đọc số nguyên n bằng cin', re: /cin\s*>>/, pts: 1 },
            { label: 'Kiểm tra chia hết cho 2 bằng toán tử %', re: /%\s*2/, pts: 2.5 },
            { label: 'Dùng cấu trúc if', re: /\bif\s*\(|\?[^:;]+:/, pts: 1.5 },
            { label: 'Có nhánh còn lại (else hoặc ?:)', re: /\belse\b|\?[^:;]+:/, pts: 1.5 },
            { label: 'In đủ hai kết quả Chan / Le', re: /(?=[\s\S]*(Chan|Chẵn|even))(?=[\s\S]*(\bLe\b|Lẻ|odd))/i, pts: 1.5 }
          ]
        },
        {
          id: '2.2', level: 2,
          title: 'Giải phương trình bậc hai',
          statement: '<p>Nhập ba số thực <code>a, b, c</code>. Giải phương trình <code>ax² + bx + c = 0</code>. Nếu <code>a = 0</code> thì báo "không phải phương trình bậc 2". Ngược lại in: vô nghiệm, nghiệm kép hoặc hai nghiệm phân biệt (2 chữ số thập phân).</p>',
          sampleIn: '1 -3 2',
          sampleOut: 'x1 = 2.00, x2 = 1.00',
          solution: C`#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

int main() {
    double a, b, c;
    cin >> a >> b >> c;
    if (a == 0) {
        cout << "Khong phai phuong trinh bac 2" << endl;
        return 0;
    }
    double delta = b * b - 4 * a * c;
    cout << fixed << setprecision(2);
    if (delta < 0) {
        cout << "Vo nghiem" << endl;
    } else if (delta == 0) {
        cout << "Nghiem kep x = " << -b / (2 * a) << endl;
    } else {
        double x1 = (-b + sqrt(delta)) / (2 * a);
        double x2 = (-b - sqrt(delta)) / (2 * a);
        cout << "x1 = " << x1 << ", x2 = " << x2 << endl;
    }
    return 0;
}`,
          explain: '<p>Tính biệt thức <code>Δ = b² − 4ac</code>. Nếu Δ &lt; 0 thì vô nghiệm; Δ = 0 thì nghiệm kép <code>−b/(2a)</code>; Δ &gt; 0 thì hai nghiệm <code>(−b ± √Δ)/(2a)</code>. Cần <code>#include &lt;cmath&gt;</code> để dùng <code>sqrt</code>. Đừng quên xử lý trường hợp a = 0 (tránh chia cho 0).</p>',
          checks: [
            { label: 'Khai báo thư viện <cmath> (hàm sqrt)', re: /#\s*include\s*<\s*(cmath|math\.h|bits\/stdc\+\+\.h)\s*>/, pts: 1 },
            { label: 'Tính biệt thức delta = b² − 4ac', re: /(\w+)\s*\*\s*\1\s*-\s*4\s*\*\s*\w+\s*\*\s*\w+|pow\s*\(\s*\w+\s*,\s*2\s*\)\s*-\s*4/, pts: 2 },
            { label: 'Dùng hàm sqrt để tính căn', re: /sqrt\s*\(/, pts: 1 },
            { label: 'Có đủ ba nhánh: if / else if / else', re: /\bif\b[\s\S]*\belse\s+if\b[\s\S]*\belse\b/, pts: 1.5 },
            { label: 'Công thức nghiệm chia cho 2a', re: /\/\s*\(\s*2\s*\*\s*\w+\s*\)|\/\s*2\s*\/\s*\w+|\/\s*\(\s*\w+\s*\*\s*2\s*\)/, pts: 1.5 },
            { label: 'So sánh delta với 0', re: /[<>]=?\s*0/, pts: 1 }
          ]
        },
        {
          id: '2.3', level: 3,
          title: 'Kiểm tra và phân loại tam giác',
          statement: '<p>Nhập độ dài ba cạnh <code>a, b, c</code>. Kiểm tra ba cạnh có tạo thành tam giác không; nếu có, cho biết đó là tam giác <b>đều</b>, <b>cân</b>, <b>vuông</b> hay <b>thường</b> (xét theo thứ tự ưu tiên này).</p>',
          sampleIn: '3 4 5',
          sampleOut: 'Tam giac vuong',
          solution: C`#include <iostream>
#include <cmath>
using namespace std;

int main() {
    double a, b, c;
    cin >> a >> b >> c;
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
        cout << "Khong phai tam giac" << endl;
        return 0;
    }
    if (a == b && b == c)
        cout << "Tam giac deu" << endl;
    else if (a == b || b == c || a == c)
        cout << "Tam giac can" << endl;
    else if (a*a + b*b == c*c || a*a + c*c == b*b || b*b + c*c == a*a)
        cout << "Tam giac vuong" << endl;
    else
        cout << "Tam giac thuong" << endl;
    return 0;
}`,
          explain: '<p>Điều kiện tam giác: ba cạnh dương và tổng hai cạnh bất kỳ lớn hơn cạnh còn lại. Phân loại theo thứ tự: đều (3 cạnh bằng nhau) → cân (có 2 cạnh bằng nhau) → vuông (định lý Pythagore) → thường. Với cạnh là số thực, nên so sánh bằng sai số <code>fabs(x - y) &lt; 1e-9</code> thay vì <code>==</code>; bài này chấp nhận <code>==</code> cho đề bài số nguyên.</p>',
          checks: [
            { label: 'Kiểm tra bất đẳng thức tam giác (a + b > c ...)', re: /\w+\s*\+\s*\w+\s*[<>]=?\s*\w+|\w+\s*[<>]=?\s*\w+\s*\+\s*\w+/, pts: 2 },
            { label: 'Kiểm tra các cạnh dương', re: /[<>]=?\s*0/, pts: 1 },
            { label: 'Nhận diện tam giác đều (a == b && b == c)', re: /\w+\s*==\s*\w+\s*&&\s*\w+\s*==\s*\w+/, pts: 1.5 },
            { label: 'Nhận diện tam giác cân (dùng ||)', re: /\w+\s*==\s*\w+\s*\|\|\s*\w+\s*==\s*\w+/, pts: 1.5 },
            { label: 'Nhận diện tam giác vuông (Pythagore)', re: /(\w+)\s*\*\s*\1\s*\+\s*(\w+)\s*\*\s*\2\s*==\s*(\w+)\s*\*\s*\3|pow\s*\(/, pts: 1.5 },
            { label: 'Dùng chuỗi else if để phân loại', re: /\belse\s+if\b/, pts: 0.5 }
          ]
        }
      ]
    },

    /* ===================================================== CHƯƠNG 3 */
    {
      id: 3,
      icon: '↻',
      title: 'Cấu trúc lặp',
      summary: 'for, while, do-while, break/continue và vòng lặp lồng nhau để xử lý công việc lặp đi lặp lại.',
      theory: [
        {
          title: 'Vòng lặp for',
          html: '<p>Dùng khi biết trước số lần lặp. Cú pháp gồm ba phần: <code>khởi tạo; điều kiện; bước nhảy</code>. Vòng lặp chạy chừng nào điều kiện còn đúng.</p>',
          code: C`// Tính tổng các số từ 1 đến 100
int tong = 0;
for (int i = 1; i <= 100; i++) {
    tong += i;
}
cout << tong << endl;   // 5050`
        },
        {
          title: 'Vòng lặp while và do-while',
          html: '<p><code>while</code> kiểm tra điều kiện <b>trước</b> khi lặp (có thể không chạy lần nào). <code>do-while</code> thực hiện thân vòng lặp <b>ít nhất một lần</b> rồi mới kiểm tra, rất hợp để nhập dữ liệu cho đến khi hợp lệ.</p>',
          code: C`int n;
do {
    cout << "Nhap n (n > 0): ";
    cin >> n;
} while (n <= 0);

while (n > 0) {          // tách từng chữ số
    cout << n % 10 << " ";
    n /= 10;
}`
        },
        {
          title: 'break và continue',
          html: '<ul><li><code>break</code>: thoát hẳn khỏi vòng lặp hiện tại.</li><li><code>continue</code>: bỏ qua phần còn lại của lượt lặp này, sang lượt kế tiếp.</li></ul><p class="warn"><b>Cẩn thận vòng lặp vô hạn:</b> luôn bảo đảm biến điều kiện thay đổi sau mỗi lượt (ví dụ quên <code>i++</code>).</p>',
          code: C`for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue;   // bỏ qua số chẵn
    if (i > 7) break;           // dừng khi i > 7
    cout << i << " ";           // 1 3 5 7
}`
        },
        {
          title: 'Vòng lặp lồng nhau',
          html: '<p>Một vòng lặp nằm trong vòng lặp khác. Vòng ngoài thường chạy theo <b>dòng</b>, vòng trong chạy theo <b>cột</b>. Số lần lặp tổng cộng bằng tích số lần lặp của hai vòng.</p>',
          code: C`// In tam giác sao
int n = 4;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        cout << "* ";
    }
    cout << endl;
}`
        }
      ],
      exercises: [
        {
          id: '3.1', level: 1,
          title: 'Tổng các số từ 1 đến n',
          statement: '<p>Nhập số nguyên dương <code>n</code>. Tính và in tổng <code>S = 1 + 2 + ... + n</code>.</p>',
          sampleIn: '100',
          sampleOut: 'Tong = 5050',
          solution: C`#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    long long sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }
    cout << "Tong = " << sum << endl;
    return 0;
}`,
          explain: '<p>Dùng biến tích lũy <code>sum</code> khởi tạo bằng 0 rồi cộng dồn <code>i</code> trong vòng for. Dùng <code>long long</code> để tránh tràn số khi n lớn. Cũng có thể dùng công thức <code>n*(n+1)/2</code>.</p>',
          checks: [
            { label: 'Đọc n bằng cin', re: /cin\s*>>/, pts: 1 },
            { label: 'Có vòng lặp (for/while) hoặc công thức n(n+1)/2', re: /\bfor\s*\(|\bwhile\s*\(|\w+\s*\*\s*\(\s*\w+\s*\+\s*1\s*\)\s*\/\s*2/, pts: 2 },
            { label: 'Khởi tạo biến tổng bằng 0', re: /=\s*0\s*[;,]/, pts: 1 },
            { label: 'Cộng dồn vào biến tổng', re: /\w+\s*\+=\s*\w+|(\w+)\s*=\s*\1\s*\+\s*\w+|\w+\s*\*\s*\(\s*\w+\s*\+\s*1\s*\)\s*\/\s*2/, pts: 2 },
            { label: 'Điều kiện dừng đến n (i <= n)', re: /<=?\s*\w+/, pts: 1.5 },
            { label: 'Dùng kiểu đủ lớn (long long/double)', re: /long\s+long|\bint64_t\b|\bdouble\b|\bunsigned\b/, pts: 0.5 }
          ]
        },
        {
          id: '3.2', level: 2,
          title: 'Kiểm tra số nguyên tố',
          statement: '<p>Nhập số nguyên <code>n</code>. Viết hàm kiểm tra n có phải số nguyên tố không và in kết quả. Gợi ý: chỉ cần thử chia cho các số từ 2 đến √n.</p>',
          sampleIn: '29',
          sampleOut: '29 la so nguyen to',
          solution: C`#include <iostream>
using namespace std;

bool laNguyenTo(int n) {
    if (n < 2) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    int n;
    cin >> n;
    if (laNguyenTo(n))
        cout << n << " la so nguyen to" << endl;
    else
        cout << n << " khong phai so nguyen to" << endl;
    return 0;
}`,
          explain: '<p>Số nguyên tố là số lớn hơn 1 chỉ chia hết cho 1 và chính nó. Nếu n có ước lớn hơn √n thì cũng có ước nhỏ hơn √n, nên chỉ cần duyệt <code>i * i &lt;= n</code>, giúp giảm từ O(n) xuống O(√n). Gặp một ước là kết luận ngay, không cần xét tiếp.</p>',
          checks: [
            { label: 'Loại trường hợp n < 2', re: /<\s*2|<=\s*1/, pts: 1.5 },
            { label: 'Có vòng lặp duyệt các ước', re: /\bfor\s*\(|\bwhile\s*\(/, pts: 1.5 },
            { label: 'Kiểm tra chia hết (n % i == 0)', re: /%\s*\w+\s*==\s*0/, pts: 2 },
            { label: 'Tối ưu: duyệt đến căn bậc hai (i*i <= n)', re: /\w+\s*\*\s*\w+\s*<=?\s*\w+|sqrt\s*\(/, pts: 1.5 },
            { label: 'Trả về/đánh dấu kết quả (return true/false hoặc cờ)', re: /return\s+(true|false)|\bflag\b|\bbool\b|\bdem\b|\bcount\b/, pts: 1 },
            { label: 'Có hai nhánh kết quả (là / không là số nguyên tố)', re: /\belse\b|\?[^:;]+:/, pts: 0.5 }
          ]
        },
        {
          id: '3.3', level: 3,
          title: 'Đảo ngược số và kiểm tra số đối xứng',
          statement: '<p>Nhập số nguyên dương <code>n</code>. Hãy in ra số đảo ngược của n (các chữ số viết theo thứ tự ngược lại) và cho biết n có phải số đối xứng (palindrome) hay không.</p>',
          sampleIn: '12321',
          sampleOut: 'So dao nguoc: 12321\nLa so doi xung',
          solution: C`#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int goc = n, dao = 0;
    while (n > 0) {
        int chuSo = n % 10;
        dao = dao * 10 + chuSo;
        n /= 10;
    }
    cout << "So dao nguoc: " << dao << endl;
    if (dao == goc)
        cout << "La so doi xung" << endl;
    else
        cout << "Khong phai so doi xung" << endl;
    return 0;
}`,
          explain: '<p>Mỗi vòng lặp: lấy chữ số cuối bằng <code>n % 10</code>, ghép vào số đảo bằng <code>dao = dao * 10 + chuSo</code>, rồi bỏ chữ số cuối bằng <code>n /= 10</code>. Phải lưu bản gốc <code>goc = n</code> trước khi vòng lặp làm thay đổi n, để so sánh ở cuối.</p>',
          checks: [
            { label: 'Có vòng lặp xử lý từng chữ số', re: /\bwhile\s*\(|\bfor\s*\(/, pts: 1.5 },
            { label: 'Lấy chữ số cuối bằng % 10', re: /%\s*10/, pts: 2 },
            { label: 'Bỏ chữ số cuối bằng / 10', re: /\/=\s*10|=\s*\w+\s*\/\s*10/, pts: 1.5 },
            { label: 'Ghép số đảo: dao = dao * 10 + chuSo', re: /\w+\s*\*\s*10\s*\+|\w+\s*=\s*\w+\s*\*\s*10/, pts: 2 },
            { label: 'So sánh số đảo với số gốc', re: /==/, pts: 1 }
          ]
        }
      ]
    },

    /* ===================================================== CHƯƠNG 4 */
    {
      id: 4,
      icon: '▦',
      title: 'Mảng và chuỗi ký tự',
      summary: 'Lưu và xử lý tập dữ liệu bằng mảng một chiều, hai chiều và chuỗi string.',
      theory: [
        {
          title: 'Mảng một chiều',
          html: '<p>Mảng là dãy các phần tử cùng kiểu, nằm liên tiếp trong bộ nhớ. Chỉ số bắt đầu từ <b>0</b>, phần tử cuối có chỉ số <code>n-1</code>. Truy cập ngoài phạm vi gây lỗi khó đoán, hãy khai báo kích thước đủ lớn (ví dụ 100 hoặc 1000) và kiểm soát <code>n</code>.</p>',
          code: C`int a[100], n;
cin >> n;
for (int i = 0; i < n; i++) {
    cin >> a[i];                 // nhập
}
for (int i = 0; i < n; i++) {
    cout << a[i] << " ";         // xuất
}`
        },
        {
          title: 'Các thuật toán cơ bản trên mảng',
          html: '<ul><li><b>Tổng / đếm / trung bình:</b> duyệt toàn bộ mảng và cộng dồn.</li><li><b>Tìm max/min:</b> gán phần tử đầu làm giá trị khởi đầu rồi so sánh với các phần tử còn lại.</li><li><b>Tìm kiếm tuyến tính:</b> duyệt từng phần tử, gặp giá trị cần tìm thì dừng.</li><li><b>Sắp xếp:</b> nổi bọt, chọn, chèn (tự cài đặt) hoặc <code>sort(a, a + n)</code> trong <code>&lt;algorithm&gt;</code>.</li></ul>',
          code: C`#include <algorithm>
// tìm vị trí của x trong mảng
int viTri = -1;
for (int i = 0; i < n; i++) {
    if (a[i] == x) { viTri = i; break; }
}
// sắp xếp tăng dần bằng thư viện
sort(a, a + n);`
        },
        {
          title: 'Mảng hai chiều',
          html: '<p>Mảng hai chiều (ma trận) khai báo <code>kiểu tên[số_dòng][số_cột]</code>. Truy cập phần tử bằng hai chỉ số <code>a[i][j]</code>, thường duyệt bằng hai vòng for lồng nhau.</p>',
          code: C`int m[10][10], d, c;
cin >> d >> c;
for (int i = 0; i < d; i++)
    for (int j = 0; j < c; j++)
        cin >> m[i][j];

int tong = 0;
for (int i = 0; i < d; i++)
    for (int j = 0; j < c; j++)
        tong += m[i][j];`
        },
        {
          title: 'Chuỗi ký tự string',
          html: '<p>Kiểu <code>string</code> (thư viện <code>&lt;string&gt;</code>) biểu diễn chuỗi và hỗ trợ nhiều thao tác: <code>s.length()</code> độ dài, <code>s[i]</code> ký tự thứ i, <code>s1 + s2</code> nối chuỗi, <code>s.substr(vt, len)</code> cắt chuỗi, <code>s.find(t)</code> tìm chuỗi con. Dùng <code>getline(cin, s)</code> để đọc cả dòng có dấu cách. Hàm <code>tolower(c)</code>, <code>toupper(c)</code> đổi chữ hoa/thường.</p>',
          code: C`string s;
getline(cin, s);
cout << "Do dai: " << s.length() << endl;
for (int i = 0; i < s.length(); i++) {
    s[i] = toupper(s[i]);        // đổi thành chữ hoa
}
cout << s << endl;`
        }
      ],
      exercises: [
        {
          id: '4.1', level: 1,
          title: 'Giá trị lớn nhất và nhỏ nhất của mảng',
          statement: '<p>Nhập số nguyên <code>n</code> (n ≤ 100) và <code>n</code> phần tử của mảng. In ra giá trị lớn nhất và nhỏ nhất.</p>',
          sampleIn: '5\n4 9 -2 7 0',
          sampleOut: 'Max = 9\nMin = -2',
          solution: C`#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int a[100];
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    int maxVal = a[0], minVal = a[0];
    for (int i = 1; i < n; i++) {
        if (a[i] > maxVal) maxVal = a[i];
        if (a[i] < minVal) minVal = a[i];
    }
    cout << "Max = " << maxVal << endl;
    cout << "Min = " << minVal << endl;
    return 0;
}`,
          explain: '<p>Khởi tạo <code>maxVal</code> và <code>minVal</code> bằng <b>phần tử đầu tiên</b> (không nên khởi tạo bằng 0 vì mảng có thể toàn số âm hoặc toàn số dương). Duyệt từ phần tử thứ hai và cập nhật khi gặp giá trị lớn hơn/nhỏ hơn.</p>',
          checks: [
            { label: 'Khai báo mảng (hoặc vector)', re: /\bint\s+\w+\s*\[|vector\s*<\s*int\s*>/, pts: 1.5 },
            { label: 'Vòng lặp nhập các phần tử vào mảng', re: /for\s*\([^)]*\)\s*\{?\s*cin\s*>>\s*\w+\s*\[/, pts: 2 },
            { label: 'Khởi tạo max/min bằng phần tử đầu a[0]', re: /=\s*\w+\s*\[\s*0\s*\]/, pts: 1.5 },
            { label: 'So sánh để cập nhật giá trị lớn nhất', re: /\w+\s*\[\s*\w+\s*\]\s*>\s*\w+/, pts: 1.5 },
            { label: 'So sánh để cập nhật giá trị nhỏ nhất', re: /\w+\s*\[\s*\w+\s*\]\s*<\s*\w+/, pts: 1.5 }
          ]
        },
        {
          id: '4.2', level: 2,
          title: 'Sắp xếp mảng tăng dần',
          statement: '<p>Nhập <code>n</code> và mảng <code>n</code> số nguyên. Sắp xếp mảng theo thứ tự <b>tăng dần</b> bằng thuật toán nổi bọt (hoặc chọn/chèn) rồi in mảng sau khi sắp xếp.</p>',
          sampleIn: '5\n5 2 9 1 7',
          sampleOut: '1 2 5 7 9',
          solution: C`#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int a[100];
    for (int i = 0; i < n; i++) cin >> a[i];

    // Sap xep noi bot
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                int tam = a[j];
                a[j] = a[j + 1];
                a[j + 1] = tam;
            }
        }
    }

    for (int i = 0; i < n; i++) cout << a[i] << " ";
    cout << endl;
    return 0;
}`,
          explain: '<p>Sắp xếp nổi bọt: sau mỗi lượt của vòng ngoài, phần tử lớn nhất "nổi" về cuối nên vòng trong ngắn dần (<code>j &lt; n-1-i</code>). Hai phần tử liền kề sai thứ tự thì hoán đổi bằng biến tạm. Độ phức tạp O(n²). Trong thực tế có thể dùng <code>sort(a, a + n)</code>.</p>',
          checks: [
            { label: 'Khai báo mảng và nhập dữ liệu', re: /\bint\s+\w+\s*\[|vector\s*<\s*int\s*>/, pts: 1.5 },
            { label: 'Hai vòng lặp lồng nhau (hoặc hàm sort)', re: /\bfor\s*\([^)]*\)\s*\{[^}]*\bfor\s*\(|\bfor\s*\([^)]*\)\s*for\s*\(|\bsort\s*\(/, pts: 2.5 },
            { label: 'So sánh hai phần tử mảng', re: /\w+\s*\[[^\]]+\]\s*[<>]=?\s*\w+\s*\[[^\]]+\]/, pts: 2 },
            { label: 'Hoán đổi hai phần tử (biến tạm hoặc swap)', re: /swap\s*\(|\bsort\s*\(|\w+\s*=\s*\w+\s*\[[^\]]+\]\s*;[\s\S]*\w+\s*\[[^\]]+\]\s*=\s*\w+\s*\[/, pts: 2 }
          ]
        },
        {
          id: '4.3', level: 3,
          title: 'Chuỗi đối xứng và đếm nguyên âm',
          statement: '<p>Nhập một chuỗi (có thể chứa dấu cách) bằng <code>getline</code>. Cho biết chuỗi có đối xứng không (đọc xuôi ngược giống nhau) và đếm số nguyên âm (<code>a, e, i, o, u</code>, không phân biệt hoa thường).</p>',
          sampleIn: 'level',
          sampleOut: 'Doi xung\nSo nguyen am: 2',
          solution: C`#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    getline(cin, s);
    int n = s.length();
    bool doiXung = true;
    for (int i = 0; i < n / 2; i++) {
        if (s[i] != s[n - 1 - i]) {
            doiXung = false;
            break;
        }
    }
    int dem = 0;
    for (char c : s) {
        c = tolower(c);
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') dem++;
    }
    cout << (doiXung ? "Doi xung" : "Khong doi xung") << endl;
    cout << "So nguyen am: " << dem << endl;
    return 0;
}`,
          explain: '<p>Chuỗi đối xứng khi ký tự thứ <code>i</code> bằng ký tự thứ <code>n-1-i</code> với mọi i từ 0 đến n/2 (chỉ cần duyệt một nửa chuỗi). Dùng <code>tolower</code> để chuẩn hóa chữ hoa/thường trước khi đếm nguyên âm. <code>getline</code> giúp đọc được cả chuỗi có dấu cách.</p>',
          checks: [
            { label: 'Khai báo biến kiểu string', re: /\bstring\b|char\s+\w+\s*\[/, pts: 1 },
            { label: 'Đọc chuỗi (getline hoặc cin)', re: /getline\s*\(\s*cin|cin\s*>>\s*\w+/, pts: 1 },
            { label: 'Lấy độ dài chuỗi (length/size/strlen)', re: /\.length\s*\(|\.size\s*\(|strlen\s*\(/, pts: 1 },
            { label: 'So sánh ký tự đối xứng s[i] với s[n-1-i]', re: /\w+\s*\[\s*\w+\s*\]\s*!?=+\s*\w+\s*\[\s*\w+\s*-\s*1\s*-\s*\w+\s*\]|\w+\s*\[\s*\w+\s*\]\s*!?=+\s*\w+\s*\[\s*\w+\s*-\s*\w+\s*-\s*1\s*\]|reverse\s*\(|\.rbegin/, pts: 2 },
            { label: 'Kiểm tra đủ 5 nguyên âm a, e, i, o, u', re: /'a'[\s\S]*'e'[\s\S]*'i'[\s\S]*'o'[\s\S]*'u'|aeiou/i, pts: 1.5 },
            { label: 'Chuẩn hóa chữ hoa/thường (tolower/toupper)', re: /tolower|toupper|'A'/, pts: 0.5 },
            { label: 'Có biến đếm tăng dần', re: /\+\+|\+=\s*1/, pts: 1 }
          ]
        }
      ]
    },

    /* ===================================================== CHƯƠNG 5 */
    {
      id: 5,
      icon: 'ƒ',
      title: 'Hàm, con trỏ và đệ quy',
      summary: 'Chia chương trình thành các hàm, truyền tham số, làm quen con trỏ và tư duy đệ quy.',
      theory: [
        {
          title: 'Hàm trong C++',
          html: '<p>Hàm là khối lệnh có tên, nhận tham số và có thể trả về giá trị, giúp tái sử dụng và chia nhỏ bài toán. Cú pháp: <code>kiểuTrảVề tênHàm(tham_số) { ... return giá_trị; }</code>. Hàm không trả về gì dùng kiểu <code>void</code>. Hàm phải được định nghĩa (hoặc khai báo nguyên mẫu) <b>trước</b> khi được gọi.</p>',
          code: C`int binhPhuong(int x) {
    return x * x;
}

void chaoHoi(string ten) {
    cout << "Xin chao " << ten << endl;
}

int main() {
    chaoHoi("An");
    cout << binhPhuong(5) << endl;   // 25
    return 0;
}`
        },
        {
          title: 'Truyền tham trị và tham chiếu',
          html: '<p>Mặc định, tham số được truyền <b>theo giá trị</b>: hàm làm việc trên bản sao nên không thay đổi biến gốc. Thêm dấu <code>&amp;</code> để truyền <b>theo tham chiếu</b>: hàm thao tác trực tiếp trên biến gốc. Dùng khi hàm cần "trả về" nhiều kết quả hoặc sửa dữ liệu truyền vào.</p>',
          code: C`void tangTri(int x)  { x++; }    // không đổi biến gốc
void tangRef(int &x) { x++; }    // đổi biến gốc

int main() {
    int a = 5;
    tangTri(a);  cout << a << endl;  // 5
    tangRef(a);  cout << a << endl;  // 6
}`
        },
        {
          title: 'Con trỏ cơ bản',
          html: '<p>Con trỏ là biến lưu <b>địa chỉ</b> của biến khác. Toán tử <code>&amp;x</code> lấy địa chỉ của x; <code>*p</code> truy cập giá trị tại địa chỉ mà p trỏ tới. Tên mảng chính là con trỏ tới phần tử đầu tiên: <code>a[i]</code> tương đương <code>*(a + i)</code>. Con trỏ chưa trỏ đâu nên gán <code>nullptr</code>.</p>',
          code: C`int x = 10;
int *p = &x;          // p trỏ tới x
*p = 20;              // đổi giá trị x qua con trỏ
cout << x << endl;    // 20

int a[3] = {1, 2, 3};
cout << *(a + 1) << endl;   // 2`
        },
        {
          title: 'Đệ quy',
          html: '<p>Hàm đệ quy là hàm tự gọi lại chính nó. Cần có hai thành phần: <b>điều kiện dừng</b> (trường hợp cơ sở) và <b>bước đệ quy</b> đưa bài toán về bài toán nhỏ hơn. Thiếu điều kiện dừng sẽ gây tràn ngăn xếp (stack overflow). Đệ quy ngắn gọn nhưng đôi khi chậm hơn vòng lặp (ví dụ Fibonacci đệ quy thuần có độ phức tạp mũ).</p>',
          code: C`long long giaiThua(int n) {
    if (n <= 1) return 1;            // điều kiện dừng
    return n * giaiThua(n - 1);      // bước đệ quy
}
// giaiThua(4) = 4 * 3 * 2 * 1 = 24`
        }
      ],
      exercises: [
        {
          id: '5.1', level: 1,
          title: 'Hàm tính giai thừa',
          statement: '<p>Viết hàm <code>giaiThua(int n)</code> trả về <code>n!</code> (n ≤ 20). Trong <code>main</code>, nhập n và in kết quả.</p>',
          sampleIn: '5',
          sampleOut: '5! = 120',
          solution: C`#include <iostream>
using namespace std;

long long giaiThua(int n) {
    long long kq = 1;
    for (int i = 2; i <= n; i++) {
        kq *= i;
    }
    return kq;
}

int main() {
    int n;
    cin >> n;
    cout << n << "! = " << giaiThua(n) << endl;
    return 0;
}`,
          explain: '<p>Hàm nhận n và trả về tích 1·2·...·n. Dùng <code>long long</code> vì 20! khoảng 2,4·10¹⁸ vượt khả năng của <code>int</code>. Khởi tạo kết quả bằng 1 (phần tử trung hòa của phép nhân), không phải 0.</p>',
          checks: [
            { label: 'Định nghĩa hàm có tham số, nằm ngoài main', re: /(int|long\s+long|double|unsigned\s+long\s+long)\s+\w+\s*\(\s*(int|long\s+long)\s+\w+\s*\)\s*\{/, pts: 2 },
            { label: 'Hàm trả về giá trị bằng return', re: /return\s+(?!0\s*;)[\w(]/, pts: 1.5 },
            { label: 'Tính tích (dùng *= hoặc nhân dần / đệ quy)', re: /\*=\s*\w+|(\w+)\s*=\s*\1\s*\*\s*\w+|\w+\s*\*\s*\w+\s*\(\s*\w+\s*-\s*1/, pts: 2 },
            { label: 'Có vòng lặp (hoặc đệ quy)', re: /\bfor\s*\(|\bwhile\s*\(|return\s+\w+\s*\*\s*\w+\s*\(/, pts: 1 },
            { label: 'Dùng kiểu số nguyên lớn (long long)', re: /long\s+long|unsigned/, pts: 0.5 },
            { label: 'Gọi hàm từ main và in kết quả', re: /<<\s*\w+\s*\(\s*\w+\s*\)|=\s*\w+\s*\(\s*\w+\s*\)\s*;/, pts: 1 }
          ]
        },
        {
          id: '5.2', level: 2,
          title: 'Hoán đổi hai số bằng tham chiếu và con trỏ',
          statement: '<p>Viết hai hàm hoán đổi giá trị của hai số nguyên: một hàm dùng <b>tham chiếu</b> (<code>int &amp;</code>) và một hàm dùng <b>con trỏ</b> (<code>int *</code>). Trong <code>main</code>, nhập hai số <code>x, y</code>, gọi từng hàm và in kết quả sau mỗi lần hoán đổi.</p>',
          sampleIn: '3 8',
          sampleOut: 'Sau khi hoan doi (tham chieu): 8 3\nHoan doi lai (con tro): 3 8',
          solution: C`#include <iostream>
using namespace std;

void hoanDoi(int &a, int &b) {
    int tam = a;
    a = b;
    b = tam;
}

void hoanDoiConTro(int *p, int *q) {
    int tam = *p;
    *p = *q;
    *q = tam;
}

int main() {
    int x, y;
    cin >> x >> y;
    hoanDoi(x, y);
    cout << "Sau khi hoan doi (tham chieu): " << x << " " << y << endl;
    hoanDoiConTro(&x, &y);
    cout << "Hoan doi lai (con tro): " << x << " " << y << endl;
    return 0;
}`,
          explain: '<p>Với tham chiếu, <code>a</code> và <code>b</code> là "biệt danh" của <code>x</code> và <code>y</code> nên đổi chúng là đổi biến gốc. Với con trỏ, truyền địa chỉ <code>&amp;x</code>, <code>&amp;y</code> rồi dùng <code>*p</code>, <code>*q</code> để đọc/ghi giá trị tại địa chỉ đó. Cả hai cách đều cần biến tạm để không mất giá trị khi gán.</p>',
          checks: [
            { label: 'Định nghĩa hàm void nhận hai tham số tham chiếu hoặc con trỏ', re: /void\s+\w+\s*\(\s*int\s*&\s*\w+\s*,\s*int\s*&\s*\w+\s*\)|void\s+\w+\s*\(\s*int\s*\*\s*\w+\s*,\s*int\s*\*\s*\w+\s*\)/, pts: 2.5 },
            { label: 'Hoán đổi bằng biến tạm (hoặc swap)', re: /(\w+)\s*=\s*\*?\s*\w+\s*;[\s\S]*\*?\s*\w+\s*=\s*\*?\s*\w+\s*;[\s\S]*\*?\s*\w+\s*=\s*\1\s*;|swap\s*\(/, pts: 2 },
            { label: 'Gọi hàm hoán đổi trong main', re: /[A-Za-z_]\w*\s*\(\s*&?\w+\s*,\s*&?\w+\s*\)\s*;/, pts: 1.5 },
            { label: 'Dùng tham chiếu (int &) hoặc con trỏ (int *)', re: /int\s*&\s*\w+|int\s*\*\s*\w+/, pts: 1 },
            { label: 'Cài đặt cả hai cách: tham chiếu và con trỏ', re: /int\s*&\s*\w+[\s\S]*int\s*\*\s*\w+|int\s*\*\s*\w+[\s\S]*int\s*&\s*\w+/, pts: 1 }
          ]
        },
        {
          id: '5.3', level: 3,
          title: 'Đệ quy: tổng chữ số và Fibonacci',
          statement: '<p>Viết hai hàm <b>đệ quy</b>: <code>tongChuSo(n)</code> tính tổng các chữ số của n, và <code>fibo(n)</code> trả về số Fibonacci thứ n (<code>F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2</code>). Nhập n (n ≤ 30) và in cả hai kết quả.</p>',
          sampleIn: '10',
          sampleOut: 'Tong chu so: 1\nFibonacci(10) = 55',
          solution: C`#include <iostream>
using namespace std;

int tongChuSo(int n) {
    if (n == 0) return 0;
    return n % 10 + tongChuSo(n / 10);
}

long long fibo(int n) {
    if (n <= 1) return n;
    return fibo(n - 1) + fibo(n - 2);
}

int main() {
    int n;
    cin >> n;
    cout << "Tong chu so: " << tongChuSo(n) << endl;
    cout << "Fibonacci(" << n << ") = " << fibo(n) << endl;
    return 0;
}`,
          explain: '<p><b>tongChuSo:</b> điều kiện dừng khi n = 0; bước đệ quy lấy chữ số cuối <code>n % 10</code> cộng với tổng chữ số của phần còn lại <code>n / 10</code>. <b>fibo:</b> hai trường hợp cơ sở F0 = 0, F1 = 1 (gộp thành <code>n &lt;= 1</code> trả về n), sau đó gọi đệ quy hai lần. Cách này chạy chậm khi n lớn (độ phức tạp mũ); có thể cải thiện bằng vòng lặp hoặc ghi nhớ kết quả (memoization).</p>',
          checks: [
            { label: 'Định nghĩa ít nhất hai hàm có tham số', re: /(int|long\s+long)\s+(?!main\b)\w+\s*\(\s*int\s+\w+\s*\)\s*\{/g, min: 2, pts: 1.5 },
            { label: 'Có điều kiện dừng (trường hợp cơ sở)', re: /if\s*\([^)]*(==\s*0|<=\s*1|<\s*2|==\s*1)[^)]*\)\s*return/, pts: 1.5 },
            { label: 'Hàm tự gọi lại chính nó (đệ quy)', re: /(\w+)\s*\(\s*int\s+\w+\s*\)\s*\{[\s\S]*?\1\s*\(\s*\w+\s*[-\/]/, pts: 2 },
            { label: 'Fibonacci: fibo(n-1) + fibo(n-2)', re: /(\w+)\s*\(\s*\w+\s*-\s*1\s*\)\s*\+\s*\1\s*\(\s*\w+\s*-\s*2\s*\)/, pts: 1.5 },
            { label: 'Tổng chữ số: dùng % 10 và / 10', re: /(?=[\s\S]*%\s*10)(?=[\s\S]*\/\s*10)/, pts: 1 },
            { label: 'Đọc n bằng cin', re: /cin\s*>>/, pts: 0.5 }
          ]
        }
      ]
    },

    /* ===================================================== CHƯƠNG 6 */
    {
      id: 6,
      icon: '🧠',
      title: 'Thuật toán và tổng ôn',
      summary: 'Vận dụng điều kiện, vòng lặp, hàm và mảng để giải bài toán tổng hợp; kiểm thử dữ liệu biên và phân tích độ phức tạp cơ bản.',
      theory: [
        {
          title: 'Quy trình giải một bài toán',
          html: '<ol><li>Xác định dữ liệu đầu vào và kết quả cần in.</li><li>Phân tích các trường hợp đặc biệt, giới hạn dữ liệu.</li><li>Viết thuật toán bằng các bước hoặc giả mã.</li><li>Cài đặt bằng C++ và kiểm thử với ví dụ, dữ liệu biên.</li></ol><p class="warn"><b>Ghi nhớ:</b> chương trình chạy đúng với một ví dụ chưa chắc đúng với mọi dữ liệu. Hãy thử cả trường hợp nhỏ nhất, số âm (nếu hợp lệ), giá trị bằng nhau và dữ liệu lớn.</p>',
          code: C`#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    long long tong = 0;
    for (int i = 1; i <= n; ++i) {
        tong += i;
    }
    cout << tong;
    return 0;
}`
        },
        {
          title: 'Thuật toán kiểm tra số nguyên tố',
          html: '<p>Số nguyên tố là số nguyên lớn hơn 1 chỉ có hai ước dương là 1 và chính nó. Không cần thử tất cả các số nhỏ hơn n; chỉ cần kiểm tra ước từ 2 đến khi <code>i * i &gt; n</code>. Nếu không có ước nào chia hết n thì n là số nguyên tố.</p>',
          code: C`bool laNguyenTo(int n) {
    if (n < 2) return false;
    for (int i = 2; i * i <= n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}`
        },
        {
          title: 'Độ phức tạp và kiểm thử',
          html: '<p>Độ phức tạp mô tả cách số phép toán tăng theo kích thước đầu vào. Một vòng lặp chạy n lần thường là <code>O(n)</code>; hai vòng lặp lồng nhau mỗi vòng chạy n lần thường là <code>O(n²)</code>. Khi kiểm thử, hãy so sánh kết quả thực tế với kết quả mong đợi và kiểm tra điều kiện dừng của vòng lặp.</p>',
          code: C`// O(n): duyệt từ 1 đến n
for (int i = 1; i <= n; ++i) {
    // xử lý một lần cho mỗi i
}

// Với n lớn, tránh vòng lặp lồng nhau không cần thiết.`
        }
      ],
      exercises: [
        {
          id: '6.1', level: 1,
          title: 'Tính tổng các chữ số',
          statement: '<p>Nhập số nguyên không âm <code>n</code>. Tính và in tổng các chữ số của n. Ví dụ, n = 507 thì kết quả là 12.</p>',
          sampleIn: '507',
          sampleOut: '12',
          solution: C`#include <iostream>
using namespace std;

int main() {
    long long n;
    cin >> n;
    int tong = 0;
    while (n > 0) {
        tong += n % 10;
        n /= 10;
    }
    cout << tong;
    return 0;
}`,
          explain: '<p>Lấy chữ số cuối bằng <code>n % 10</code>, cộng vào tổng, sau đó bỏ chữ số cuối bằng <code>n /= 10</code>. Trường hợp n = 0 cho tổng bằng 0.</p>',
          checks: [
            { label: 'Có chương trình C++ hợp lệ', re: /#\s*include\s*<\s*iostream\s*>|<bits\/stdc\+\+\.h>/, pts: 1.5 },
            { label: 'Đọc dữ liệu bằng cin', re: /cin\s*>>/, pts: 1 },
            { label: 'Dùng % 10 để lấy chữ số cuối', re: /%\s*10/, pts: 2 },
            { label: 'Dùng phép chia 10 để bỏ chữ số cuối', re: /\/=?\s*10|\/\s*10/, pts: 2 },
            { label: 'Cộng dồn tổng và in kết quả', re: /tong\s*\+=|tong\s*=\s*tong\s*\+/, pts: 2 }
          ]
        },
        {
          id: '6.2', level: 2,
          title: 'Kiểm tra số nguyên tố',
          statement: '<p>Nhập số nguyên n. In <code>La so nguyen to</code> nếu n là số nguyên tố, ngược lại in <code>Khong la so nguyen to</code>. Số nhỏ hơn 2 không phải số nguyên tố.</p>',
          sampleIn: '17',
          sampleOut: 'La so nguyen to',
          solution: C`#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    bool nguyenTo = n >= 2;
    for (int i = 2; i * i <= n; ++i) {
        if (n % i == 0) {
            nguyenTo = false;
            break;
        }
    }
    if (nguyenTo) cout << "La so nguyen to";
    else cout << "Khong la so nguyen to";
    return 0;
}`,
          explain: '<p>Khởi tạo kết quả đúng khi n ≥ 2. Duyệt các ước từ 2 đến căn bậc hai của n; nếu tìm thấy ước thì kết luận không phải số nguyên tố.</p>',
          checks: [
            { label: 'Đọc n và xử lý trường hợp n < 2', re: /cin\s*>>[\s\S]*(n\s*>=\s*2|n\s*<\s*2|n\s*<=\s*1)/, pts: 2 },
            { label: 'Duyệt tìm ước bằng vòng lặp', re: /for\s*\(/, pts: 1.5 },
            { label: 'Kiểm tra chia hết bằng %', re: /%\s*\w+\s*==\s*0|%\s*2\s*==\s*0/, pts: 2 },
            { label: 'Có nhánh in kết quả đúng/sai', re: /if\s*\([\s\S]*?\)[\s\S]*?cout[\s\S]*?else[\s\S]*?cout/, pts: 2.5 }
          ]
        },
        {
          id: '6.3', level: 3,
          title: 'Tìm số lớn thứ hai trong mảng',
          statement: '<p>Nhập n (2 ≤ n ≤ 100), sau đó nhập n số nguyên. In ra giá trị lớn thứ hai phân biệt trong mảng. Nếu không tồn tại giá trị lớn thứ hai phân biệt, in <code>Khong co</code>.</p>',
          sampleIn: '5\\n4 9 9 2 7',
          sampleOut: '7',
          solution: C`#include <iostream>
#include <climits>
using namespace std;

int main() {
    int n;
    cin >> n;
    int a[100];
    for (int i = 0; i < n; ++i) cin >> a[i];

    int lonNhat = INT_MIN, lonThuHai = INT_MIN;
    for (int i = 0; i < n; ++i) {
        if (a[i] > lonNhat) {
            lonThuHai = lonNhat;
            lonNhat = a[i];
        } else if (a[i] < lonNhat && a[i] > lonThuHai) {
            lonThuHai = a[i];
        }
    }

    if (lonThuHai == INT_MIN) cout << "Khong co";
    else cout << lonThuHai;
    return 0;
}`,
          explain: '<p>Duyệt mảng một lần và duy trì hai giá trị lớn nhất phân biệt. Khi gặp giá trị lớn hơn lớn nhất hiện tại, đẩy giá trị lớn nhất cũ xuống vị trí thứ hai. Bỏ qua phần tử trùng với giá trị lớn nhất.</p>',
          checks: [
            { label: 'Khai báo và nhập mảng', re: /(\w+)\s*\[\s*\d+\s*\][\s\S]*?cin\s*>>/, pts: 2 },
            { label: 'Duyệt mảng bằng vòng lặp', re: /for\s*\(/, min: 1, pts: 1.5 },
            { label: 'Theo dõi giá trị lớn nhất và lớn thứ hai', re: /lonNhat|max1|firstMax/i, pts: 2 },
            { label: 'Xử lý giá trị phân biệt', re: /<\s*lonNhat|!=\s*lonNhat|<\s*max1|!=\s*max1/i, pts: 2 },
            { label: 'Xử lý trường hợp không có kết quả', re: /Khong co|Không có/i, pts: 1 }
          ]
        }
      ]
    }
  ];

  function findExercise(id) {
    for (const ch of CHAPTERS) {
      for (const ex of ch.exercises) {
        if (ex.id === id) return { chapter: ch, exercise: ex };
      }
    }
    return null;
  }

  const api = { CHAPTERS: CHAPTERS, LEVELS: LEVELS, findExercise: findExercise };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.COURSE = api;
})(typeof window !== 'undefined' ? window : globalThis);
