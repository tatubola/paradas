<template>
  <nav class="nav-sidebar">
    <ul class="nav">
      <router-link tag="li" to="/services">
        <a>Serviços</a>
      </router-link>
      <router-link tag="li" to="/invoice">
        <a>Fatura</a>
      </router-link>
      <router-link tag="li" to="/conta">
        <a>Conta</a>
      </router-link>
      <router-link tag="li" to="/about">
        <a>Sobre</a>
      </router-link>
      <li class="nav-divider"></li>
      <router-link tag="li" to="/">
        <a><i class="glyphicon glyphicon-arrow-left"></i> Trocar IX</a>
      </router-link>
    </ul>
  </nav>
</template>

<style type="text/css">
  .nav-sidebar {
    width: 100%;
    padding: 8px 0;
    border-right: 1px solid #ddd;
  }
  .nav-sidebar a {
    color: #333;
    -webkit-transition: all 0.08s linear;
    -moz-transition: all 0.08s linear;
    -o-transition: all 0.08s linear;
    transition: all 0.08s linear;
    -webkit-border-radius: 4px 0 0 4px;
    -moz-border-radius: 4px 0 0 4px;
    border-radius: 4px 0 0 4px;
  }
  .nav-sidebar .router-link-exact-active a {
    cursor: default;
    background-color: #d66902;
    color: #fff;
    text-shadow: 1px 1px 1px #666;
  }
  .nav-sidebar .router-link-exact-active a:hover {
    background-color: #d66902;
  }
  .nav-sidebar .text-overflow a,
  .nav-sidebar .text-overflow .media-body {
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }
</style>
