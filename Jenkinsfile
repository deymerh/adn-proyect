pipeline{
  agent {
     label 'Slave_Induccion'
  }
  stages{
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Checkout'){
        steps{
        echo "------------>Checkout<------------"
        checkout([
        $class: 'GitSCM', 
        branches: [[name: '*/main']], 
        doGenerateSubmoduleConfigurations: false, 
        extensions: [], 
        gitTool: 'Default', 
        submoduleCfg: [], 
        userRemoteConfigs: [[
        credentialsId: 'GitHub_deymerh', 
        url:'https://github.com/deymerh/adn-proyect'
        ]]
        ])
      }
      }
      stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Static Code Analysis') {
      steps{
          echo '------------>Análisis de código estático<------------'
          withSonarQubeEnv('Sonar') {
          sh "${tool name: 'SonarScanner', type:'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner"
          }
        }
      }

  }
}
