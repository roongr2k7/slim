<?php
//echo('[{"id":"1", "name":"hello"}]');
  //echo $this->Js->object(json_encode($this->viewVars[$this->viewVars['pluralVar']]));
  echo (json_encode(Set::extract('{n}.Board', $this->viewVars[$this->viewVars['pluralVar']])));
  //echo(json_encode($this->viewVars));
?>
