const  { getDefaultConfig }  =  require ( "expo / metro-config" ) ;

módulo . exportações  =  ( assíncrona  ( )  =>  { 
  const  { 
    resolvedor : { sourceExts , assetExts } 
  }  =  aguardam  getDefaultConfig ( __dirname ) ; 
  retorno  { 
    transformador : { 
      babelTransformerPath : exigem . determinação ( "reagir-svg-transformador nativa" ) 
    } , 
    resolvedor : { 
      assetExts : assetExts. filtro ( ext  =>  ext  ! ==  "svg" ) , 
      sourceExts : [ ... sourceExts ,  "svg" ] 
    } 
  } ; 
} ) ( ) ;