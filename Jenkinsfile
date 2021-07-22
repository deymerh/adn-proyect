pipeline{
  agent: any
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
}
