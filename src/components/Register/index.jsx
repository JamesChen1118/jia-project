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
        } catch (error) {
        }
    };

    return (
        <form onSubmit={handleRegister}>
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
        </form>
    );
}; 