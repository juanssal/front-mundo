This project was created using React.

To install:
In your server's terminal run
```
mkdir sitio-mundo && cd sitio-mundo
git clone https://github.com/juanssal/front-mundo.git
npm i
npm run build
npm run start
```
And the app will be running in port 3000 by default.
<br>
If you wish to run in a different port do:
```
PORT=3003 npm run start
```

If you wish to run the app permanently use pm2 (process manager):
```
pm2 start 'npm run start'
```
To check whether it's running do:
```
pm2 ls
```
To stop, restart or delete process do:
```
pm2 stop (id or name of the process, which you can find by doing pm2 ls)
pm2 delete (id or name of the process, which you can find by doing pm2 ls)
pm2 restart (id or name of the process, which you can find by doing pm2 ls)
```
