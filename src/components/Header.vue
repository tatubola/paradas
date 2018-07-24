<template>
    <header role="banner">
        <div class="row">
            <div class="col-md-4 col-xs-8">
                <img src="../assets/logo-ix-br.png" alt="Logo Nic.br / Ix.br">
                <a href="https://nic.br" id="link-nic" style="background: url(about:blank)">&nbsp;</a>
                <a href="https://ix.br" id="link-ix" style="background: url(about:blank)">&nbsp;</a>
            </div>
            <div class="col-md-8 hidden-sm hidden-xs text-right">

                <div class="language-top pull-right">
                    <a href="#">Trocar idioma
                        <b>PT</b>
                    </a>
                    <a href="#">Change language
                        <b>EN</b>
                    </a>
                </div>

                <div class="header-buttons">
                    <button class="btn btn-default">
                        <span i18n>Logout</span>
                    </button>
                </div>
            </div>
        </div>

        <div class="row third-line">
            <div class="col-xs-12">
                <nav class="navbar navbar-inverse" role="navigation">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu">
                                <span class="sr-only">Go to navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div class="collapse navbar-collapse" id="menu">
                            <ul class="nav navbar-nav">
                                <li>
                                    <a href="/painel" i18n>Dashboard</a>
                                </li>
                                <li>
                                    <a href="/pttlogin/mysettings.php" i18n>My account</a>
                                </li>
                                <li>
                                    <a href="/recommendations" i18n>Recommendations</a>
                                </li>
                                <li>
                                    <a href='/looking-glass' i18n>BGP Looking Glass</a>
                                </li>
                                <li>
                                    <a href='#' i18n>Invoice</a>
                                </li>
                                <li class="divider visible-sm visibile-xs"></li>
                                <li class="visible-sm visible-xs">
                                    <a href="/logout" i18n>Logout</a>
                                </li>
                                <li class="divider visibile-xs"></li>
                                <li class="visible-xs">
                                    <a href="#">Change language
                                        <b>EN</b>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>
