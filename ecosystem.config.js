// development-server deployment command: pm2 deploy ecosystem.config.js development
// Start with pm2 on server for environment `development-server`: pm2 start npm --name "superOne" -- run "development-server"

// staging deployment command: pm2 deploy ecosystem.config.js staging
// Start with pm2 on server for environment `staging`: pm2 start npm --name "superOne" -- run "staging"

// pre-production deployment command: pm2 deploy ecosystem.config.js pre-production
// Start with pm2 on server for environment `pre-production`: pm2 start npm --name "superOne" -- run "pre-production"

module.exports = {
  apps: [{
      name: 'TheClearCuts',
      script: 'app.js',
      instances: 1,
      // instances: "max",
      // exec_mode : "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: '31G',
      // instance_var: 'INSTANCE_ID',
  }],

  deploy: {
      'development': {
          'user': 'ubuntu',
          'host': '13.232.108.235',
          'ref': 'origin/development',
          'repo': 'git@github.com:bimaleshchauhan/theclearcuts.git',
          'path': '/home/ubuntu/theclearcuts-front-end',
          'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env development && npm run build && git reset --hard',
          'env': {
              'NODE_ENV': 'development',
          }
      },
      'dev': {
        'user': 'ubuntu',
        'host': '13.232.108.235',
        'ref': 'origin/dev',
        'repo': 'git@github.com:bimaleshchauhan/theclearcuts.git',
        'path': '/home/ubuntu/theclearcuts-front-end',
        'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env development && npm run build && git reset --hard',
        'env': {
            'NODE_ENV': 'development',
        }
    },
      "staging": {
          'user': 'ubuntu',
          'host': '13.232.108.235',
          'ref': 'origin/staging',
          'repo': 'git@github.com:bimaleshchauhan/theclearcuts.git',
          'path': '/home/ubuntu/theclearcuts-front-end',
          'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env staging && npm run build && git reset --hard',
          'env': {
              'NODE_ENV': 'staging',
          }
      },
      "production": {
          'user': 'ubuntu',
          'host': '13.232.108.235',
          'ref': 'origin/master',
          'repo': 'git@github.com:bimaleshchauhan/theclearcuts.git',
          'path': '/home/ubuntu/theclearcuts-front-end',
          'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production && npm run build && git reset --hard',
          'env': {
              'NODE_ENV': 'production',
          }
      }
  }
};