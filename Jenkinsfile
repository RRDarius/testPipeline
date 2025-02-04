pipeline {
    agent any
    tools{
        nodejs('23.6.1')
    }

    stages {
        stage('Checkout') {
            steps {
                // Clone the React project from Git
                git 'https://github.com/CornerCaseSolutions/ccs-inventory-management-ui'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies using npm
                    sh 'npm install'
                }
            }
        }

        stage('Lint') {
            steps {
                script {
                    // Run ESLint or any linter you are using
                    sh 'npm run lint'
                }
            }
        }

        // stage('Test') {
        //     steps {
        //         script {
        //             // Run tests using Jest or your testing library
        //             sh 'npm test'
        //         }
        //     }
        // }

        stage('Build') {
            steps {
                script {
                    // Build the React project
                    sh 'npm run build'
                }
            }
        }
    }

    post {
        always {
            // Clean up or notify upon job completion
            cleanWs()  // Cleans up the workspace after job completes
        }
        success {
            // Notify on success (optional)
            echo 'Build Successful!'
        }
        failure {
            // Notify on failure (optional)
            echo 'Build Failed.'
        }
    }
}
