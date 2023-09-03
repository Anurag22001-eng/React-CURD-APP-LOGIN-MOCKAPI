
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
  ];
  function generateAccessToken() {
    const length = 32; 
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }
  
    return token;
  }
  
  
  export function login(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find((u) => u.username === username && u.password === password);
        if (user) {
          
          const accessToken = generateAccessToken();
          resolve({ user, accessToken });
        } else {
          reject(new Error('Invalid username or password'));
        }
      }, 1000); 
    });
  }
  
  export function signup(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const existingUser = users.find((user) => user.username === username);
  
        if (existingUser) {
          reject(new Error('Username already exists')); 
        } else {
          const newUser = { id: users.length + 1, username, password };
          users.push(newUser);
          resolve(newUser);
        }
      }, 1000);
    });
  }
  