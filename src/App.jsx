import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// --- Header Component ---
const Header = () => (
  <div className="w-full text-center py-4 bg-blue-950 border-b border-yellow-600 shadow-xl">
    <h1 className="text-2xl font-bold text-yellow-400 drop-shadow">✝ ملائكة كنيسة العذراء – محرم بك ✝</h1>
  </div>
);

// --- Login Page ---
function Login() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-4">
        <Card className="w-full max-w-md shadow-xl rounded-2xl p-2">
          <CardContent>
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-900">ملائكة كنيسة العذراء – محرم بك</h1>
            <h2 className="text-lg font-semibold text-center mb-6 text-gray-700">تسجيل دخول المسؤول</h2>

            <div className="space-y-4">
              <input placeholder="اسم المستخدم" className="w-full p-3 border rounded-xl" />
              <input placeholder="كلمة المرور" type="password" className="w-full p-3 border rounded-xl" />
            </div>

            <Button className="w-full text-lg mt-6 rounded-xl" asChild>
              <Link to="/dashboard">تسجيل الدخول</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

// --- Dashboard ---
function Dashboard() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-900">لوحة التحكم</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-4 rounded-2xl shadow hover:shadow-lg transition">
            <CardContent>
              <Link to="/attendance" className="text-xl block text-center font-semibold">📘 تسجيل الحضور والغياب</Link>
            </CardContent>
          </Card>

          <Card className="p-4 rounded-2xl shadow hover:shadow-lg transition">
            <CardContent>
              <Link to="/mass" className="text-xl block text-center font-semibold">⛪ تسجيل حضور القداس</Link>
            </CardContent>
          </Card>

          <Card className="p-4 rounded-2xl shadow hover:shadow-lg transition">
            <CardContent>
              <Link to="/children" className="text-xl block text-center font-semibold">👼 إدارة بيانات الأطفال</Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

// --- Attendance Page ---
function Attendance() {
  return (
    <>
      <Header />
      <div className="min-h-screen p-6 bg-white">
        <h1 className="text-2xl font-bold mb-4">📘 تسجيل الحضور والغياب</h1>
        <p className="text-gray-600">هنا المسؤول يحدد حضور أو غياب كل طفل.</p>
      </div>
    </>
  );
}

// --- Mass Attendance Page ---
function Mass() {
  return (
    <>
      <Header />
      <div className="min-h-screen p-6 bg-white">
        <h1 className="text-2xl font-bold mb-4">⛪ تسجيل حضور القداس</h1>
        <p className="text-gray-600">إدارة حضور القداسات لكل طفل.</p>
      </div>
    </>
  );
}

// --- Children Management Page ---
function Children() {
  return (
    <>
      <Header />
      <div className="min-h-screen p-6 bg-white">
        <h1 className="text-2xl font-bold mb-4">👼 إدارة بيانات الأطفال</h1>
        <p className="text-gray-600">إضافة – تعديل – حذف بيانات أطفال الخدمة.</p>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/mass" element={<Mass />} />
        <Route path="/children" element={<Children />} />
      </Routes>
    </Router>
  );
}
