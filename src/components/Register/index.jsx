const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        phone: '',
    });

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await userApi.register({
                username: formData.username,
                email: formData.email,
                password: formData.password,
                phone: formData.phone,
            });
            // 處理成功註冊
        } catch (error) {
            // 處理錯誤
        }
    };

    return (
        <form onSubmit={handleRegister}>
            {/* 其他輸入欄位 */}
            <input
                type="tel"
                placeholder="手機號碼"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({
                    ...prev,
                    phone: e.target.value
                }))}
                required
            />
            {/* 其他表單元素 */}
        </form>
    );
}; 