
$logFile = "./install.log"
$envFile = "./.env"
$webpackFile = "./webpack.config.js"
$encoding = 'UTF8'

$directoriesToCreate = (
    'dist',
    'log'
)

$commands = (

    # --SAVE Dependencies
    # =======================

    # Dev tools
    "npm install typescript",

    "npm install cors",
    "npm install @types/cors",

    "npm install dotenv",
    "npm install chai-http",
    "npm install reflect-metadata",

    # Node
    "npm install nodemon",
    "npm install -D concurrently nodemon",

    # Express
    "npm install express @types/express",
    "npm install express-validator @types/express-validator",
    "npm install express-session @types/express-session",
    "npm install cookie-parser @types/cookie-parser",
    "npm install serve-favicon @types/serve-favicon",

    # Database tools
    "npm install mariadb",
    "npm install mysql",
    "npm install knex",
    "npm install knex-mariadb",

    # HTML page builder
    "npm install pug",

    # Encryption and tokens
    "npm install bcrypt",
    "npm install ts-token-generator",

    # --SAVE-DEV Dependencies
    # =======================

    # Node
    "npm install --save-dev ts-node" ,
    "npm install --save-dev eslint ",

    # Webpack
    "npm install --save-dev webpack webpack-cli ",
    "npm install --save-dev ts-loader",

    # Testing
    "npm install --save-dev morgan @types/morgan",
    "npm install --save-dev mocha @types/mocha",
    "npm install --save-dev chai chai-http @types/chai",
    "npm install --save-dev cross-env",
    "npm install --save-dev ignore-styles",
    "npm install --save-dev babel-preset-es2015",

    # Init npm
    "npm init -y",
    "npm install"
)

# .env file
$envConfig =
"
# ================================================================#
# ##      ##    ###    ########  ##    ## #### ##    ##  ######   #
# ##  ##  ##   ## ##   ##     ## ###   ##  ##  ###   ## ##    ##  #
# ##  ##  ##  ##   ##  ##     ## ####  ##  ##  ####  ## ##        #
# ##  ##  ## ##     ## ########  ## ## ##  ##  ## ## ## ##   #### #
# ##  ##  ## ######### ##   ##   ##  ####  ##  ##  #### ##    ##  #
# ##  ##  ## ##     ## ##    ##  ##   ###  ##  ##   ### ##    ##  #
#  ###  ###  ##     ## ##     ## ##    ## #### ##    ##  ######   #
# ================================================================#

# Set to production when deploying to production
NODE_ENV=dev

# Node.js server configuration
SERVER_PORT=3000
HOST_URL=http://localhost:3000
SESSION_SECRET=FGSDh89se0tbw907asdg8

# Database configuration
DB_HOST=localhost
DB_USER=ck
DB_PASSWORD=6d2%:&wR[cV$/knl
DB_NAME=cookedKraken_db

# ================================================================#
# ##      ##    ###    ########  ##    ## #### ##    ##  ######   #
# ##  ##  ##   ## ##   ##     ## ###   ##  ##  ###   ## ##    ##  #
# ##  ##  ##  ##   ##  ##     ## ####  ##  ##  ####  ## ##        #
# ##  ##  ## ##     ## ########  ## ## ##  ##  ## ## ## ##   #### #
# ##  ##  ## ######### ##   ##   ##  ####  ##  ##  #### ##    ##  #
# ##  ##  ## ##     ## ##    ##  ##   ###  ##  ##   ### ##    ##  #
#  ###  ###  ##     ## ##     ## ##    ## #### ##    ##  ######   #
# ================================================================#
"

# webpack.config.js file
$webpackConfig =
"
const path = require('path');

module.exports = {
  entry: './src/startServer.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
"

# Start logging
Stop-Transcript | out-null
Start-Transcript -path $logFile -append
$ErrorActionPreference = "Continue"

# Create folders
foreach ($directory in $directoriesToCreate) { 
    New-Item -Name $directory -ItemType "directory" -ErrorAction $ErrorActionPreference
}

# Create webpack.config.js file
$webpackConfig | Out-File -FilePath $webpackFile -Encoding $encoding

# Create .env file
$envConfig | Out-File -FilePath $envFile -Encoding $encoding

# Install all project dependencies using a progress bar
for ($i = 1; $i -lt $commands.Length; $i++ ) {
    $j = [math]::truncate($i / $commands.Length * 100)
    Write-Progress -Activity "Installation in progress" -Status "$j% Complete:" -PercentComplete $j
    Write-Output "Executing command: $($commands[$i])"
    Invoke-Expression $commands[$i] -ErrorAction $ErrorActionPreference | Out-String -OutVariable out
}
Clear-Host
Write-Progress -Activity "Installation complete" -Status "$j% Complete:" -PercentComplete $j

# Stop logging
Stop-Transcript