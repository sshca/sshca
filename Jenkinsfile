pipeline {
    agent {
        docker {
            image 'cypress/base:16'
        }
    }

    stages {
        stage('Build') {
            steps {
                sh 'yarn install --frozen-lockfile'
                sh 'NODE_ENV=DEVELOPMENT yarn build'
            }
        }
        stage('Test') {
            steps {
                sh 'yarn test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}