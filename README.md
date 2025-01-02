# Asterisk Manager

A comprehensive and professional Asterisk management system, focusing on installation, configuration, optimization, and security management using Fail2Ban. Built with **PHP 8.4**, **Laravel**, **Vue.js 3**, and **PostgreSQL**.

## 🚀 Features

- **Backend**: Laravel with a PHP 8.4 environment for robust and secure API development.
- **Frontend**: Vue.js 3 for an interactive and user-friendly interface.
- **Database**: PostgreSQL for efficient and reliable data storage.
- **Security**: Integration with Fail2Ban for firewall management.
- **Scalability**: Designed to handle extensive configurations and logging.

---

## 🛠️ Installation

### Prerequisites

- [PHP 8.4](https://www.php.net/)
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/asterisk-manager.git
   cd asterisk-manager
   ```

2. Install PHP dependencies:
   ```bash
   composer install
   ```

3. Set up the `.env` file:
   ```bash
   cp .env.example .env
   ```
   Update the database credentials in `.env`:
   ```env
   DB_CONNECTION=pgsql
   DB_HOST=127.0.0.1
   DB_PORT=5432
   DB_DATABASE=asterisk_manager
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   ```

4. Run migrations:
   ```bash
   php artisan migrate
   ```

5. Start the development server:
   ```bash
   php artisan serve
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run serve
   ```

---

## 🔧 Project Structure

```
project-root/
├── backend/        # Laravel backend code
├── frontend/       # Vue.js frontend code
├── database/       # PostgreSQL data and schema
└── README.md       # Project documentation
```

---

## 📚 Documentation

- [Laravel Documentation](https://laravel.com/docs)
- [Vue.js Documentation](https://vuejs.org/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Fail2Ban Documentation](https://www.fail2ban.org/wiki/index.php/Main_Page)

---

## 🐛 Known Issues

- PostCSS compatibility with Vue 3. Ensure PostCSS configuration is correct.
- Node.js dependency vulnerabilities. Run:
  ```bash
  npm audit fix
  ```

---

## 💡 Contribution

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request.

---

## 🛡️ License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## 📧 Contact

For questions or support, contact: [your-email@example.com](mailto:your-email@example.com)
