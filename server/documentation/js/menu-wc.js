'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">server documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-0ea0d0ba1392b21c04d12a10a5cf701b1aedb8a7f0e39a69945572a0181f8e44c1fc154c924999fa4781ec59cb4a1be80dfe61590a655c3ecc0c867edeb6ff95"' : 'data-target="#xs-controllers-links-module-AuthModule-0ea0d0ba1392b21c04d12a10a5cf701b1aedb8a7f0e39a69945572a0181f8e44c1fc154c924999fa4781ec59cb4a1be80dfe61590a655c3ecc0c867edeb6ff95"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-0ea0d0ba1392b21c04d12a10a5cf701b1aedb8a7f0e39a69945572a0181f8e44c1fc154c924999fa4781ec59cb4a1be80dfe61590a655c3ecc0c867edeb6ff95"' :
                                            'id="xs-controllers-links-module-AuthModule-0ea0d0ba1392b21c04d12a10a5cf701b1aedb8a7f0e39a69945572a0181f8e44c1fc154c924999fa4781ec59cb4a1be80dfe61590a655c3ecc0c867edeb6ff95"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-0ea0d0ba1392b21c04d12a10a5cf701b1aedb8a7f0e39a69945572a0181f8e44c1fc154c924999fa4781ec59cb4a1be80dfe61590a655c3ecc0c867edeb6ff95"' : 'data-target="#xs-injectables-links-module-AuthModule-0ea0d0ba1392b21c04d12a10a5cf701b1aedb8a7f0e39a69945572a0181f8e44c1fc154c924999fa4781ec59cb4a1be80dfe61590a655c3ecc0c867edeb6ff95"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-0ea0d0ba1392b21c04d12a10a5cf701b1aedb8a7f0e39a69945572a0181f8e44c1fc154c924999fa4781ec59cb4a1be80dfe61590a655c3ecc0c867edeb6ff95"' :
                                        'id="xs-injectables-links-module-AuthModule-0ea0d0ba1392b21c04d12a10a5cf701b1aedb8a7f0e39a69945572a0181f8e44c1fc154c924999fa4781ec59cb4a1be80dfe61590a655c3ecc0c867edeb6ff95"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FileModule.html" data-type="entity-link" >FileModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FileModule-80b693ac83c3722e2c0191292613148119d3046e0ec4864d0379e8c27b15fe53accaf5ddf42c1878d2a9fed811e9df98cc5321641acbcad649ec10527c3fe16a"' : 'data-target="#xs-injectables-links-module-FileModule-80b693ac83c3722e2c0191292613148119d3046e0ec4864d0379e8c27b15fe53accaf5ddf42c1878d2a9fed811e9df98cc5321641acbcad649ec10527c3fe16a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FileModule-80b693ac83c3722e2c0191292613148119d3046e0ec4864d0379e8c27b15fe53accaf5ddf42c1878d2a9fed811e9df98cc5321641acbcad649ec10527c3fe16a"' :
                                        'id="xs-injectables-links-module-FileModule-80b693ac83c3722e2c0191292613148119d3046e0ec4864d0379e8c27b15fe53accaf5ddf42c1878d2a9fed811e9df98cc5321641acbcad649ec10527c3fe16a"' }>
                                        <li class="link">
                                            <a href="injectables/FileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReceiptModule.html" data-type="entity-link" >ReceiptModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ReceiptModule-705c2477933879435a961c805a2884fee98f78baa24207226c91f4b76575b02dcc989667927f284a80db184272bc7d1a582336cfd4f6b37e1629812a4b59e445"' : 'data-target="#xs-controllers-links-module-ReceiptModule-705c2477933879435a961c805a2884fee98f78baa24207226c91f4b76575b02dcc989667927f284a80db184272bc7d1a582336cfd4f6b37e1629812a4b59e445"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ReceiptModule-705c2477933879435a961c805a2884fee98f78baa24207226c91f4b76575b02dcc989667927f284a80db184272bc7d1a582336cfd4f6b37e1629812a4b59e445"' :
                                            'id="xs-controllers-links-module-ReceiptModule-705c2477933879435a961c805a2884fee98f78baa24207226c91f4b76575b02dcc989667927f284a80db184272bc7d1a582336cfd4f6b37e1629812a4b59e445"' }>
                                            <li class="link">
                                                <a href="controllers/ReceiptController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReceiptController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ReceiptModule-705c2477933879435a961c805a2884fee98f78baa24207226c91f4b76575b02dcc989667927f284a80db184272bc7d1a582336cfd4f6b37e1629812a4b59e445"' : 'data-target="#xs-injectables-links-module-ReceiptModule-705c2477933879435a961c805a2884fee98f78baa24207226c91f4b76575b02dcc989667927f284a80db184272bc7d1a582336cfd4f6b37e1629812a4b59e445"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ReceiptModule-705c2477933879435a961c805a2884fee98f78baa24207226c91f4b76575b02dcc989667927f284a80db184272bc7d1a582336cfd4f6b37e1629812a4b59e445"' :
                                        'id="xs-injectables-links-module-ReceiptModule-705c2477933879435a961c805a2884fee98f78baa24207226c91f4b76575b02dcc989667927f284a80db184272bc7d1a582336cfd4f6b37e1629812a4b59e445"' }>
                                        <li class="link">
                                            <a href="injectables/FileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ReceiptService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReceiptService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoleModule.html" data-type="entity-link" >RoleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-RoleModule-5560310abb29e5e2028162a1f845c66c567bd18620d3571da6716e4f249e51d759f4841fa78f88c45e9c742f4c15051d5dc62fa70e417d77dc56702a68e2150c"' : 'data-target="#xs-controllers-links-module-RoleModule-5560310abb29e5e2028162a1f845c66c567bd18620d3571da6716e4f249e51d759f4841fa78f88c45e9c742f4c15051d5dc62fa70e417d77dc56702a68e2150c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RoleModule-5560310abb29e5e2028162a1f845c66c567bd18620d3571da6716e4f249e51d759f4841fa78f88c45e9c742f4c15051d5dc62fa70e417d77dc56702a68e2150c"' :
                                            'id="xs-controllers-links-module-RoleModule-5560310abb29e5e2028162a1f845c66c567bd18620d3571da6716e4f249e51d759f4841fa78f88c45e9c742f4c15051d5dc62fa70e417d77dc56702a68e2150c"' }>
                                            <li class="link">
                                                <a href="controllers/RoleController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RoleModule-5560310abb29e5e2028162a1f845c66c567bd18620d3571da6716e4f249e51d759f4841fa78f88c45e9c742f4c15051d5dc62fa70e417d77dc56702a68e2150c"' : 'data-target="#xs-injectables-links-module-RoleModule-5560310abb29e5e2028162a1f845c66c567bd18620d3571da6716e4f249e51d759f4841fa78f88c45e9c742f4c15051d5dc62fa70e417d77dc56702a68e2150c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RoleModule-5560310abb29e5e2028162a1f845c66c567bd18620d3571da6716e4f249e51d759f4841fa78f88c45e9c742f4c15051d5dc62fa70e417d77dc56702a68e2150c"' :
                                        'id="xs-injectables-links-module-RoleModule-5560310abb29e5e2028162a1f845c66c567bd18620d3571da6716e4f249e51d759f4841fa78f88c45e9c742f4c15051d5dc62fa70e417d77dc56702a68e2150c"' }>
                                        <li class="link">
                                            <a href="injectables/RoleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-374a4da8909080013ea9c5aad65c52002b13f448344638d8437da34c7f9020aef6fb55791dae1aa178fc5b5736a173b1c6798667f42558728d335c85bdc04fd6"' : 'data-target="#xs-controllers-links-module-UserModule-374a4da8909080013ea9c5aad65c52002b13f448344638d8437da34c7f9020aef6fb55791dae1aa178fc5b5736a173b1c6798667f42558728d335c85bdc04fd6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-374a4da8909080013ea9c5aad65c52002b13f448344638d8437da34c7f9020aef6fb55791dae1aa178fc5b5736a173b1c6798667f42558728d335c85bdc04fd6"' :
                                            'id="xs-controllers-links-module-UserModule-374a4da8909080013ea9c5aad65c52002b13f448344638d8437da34c7f9020aef6fb55791dae1aa178fc5b5736a173b1c6798667f42558728d335c85bdc04fd6"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-374a4da8909080013ea9c5aad65c52002b13f448344638d8437da34c7f9020aef6fb55791dae1aa178fc5b5736a173b1c6798667f42558728d335c85bdc04fd6"' : 'data-target="#xs-injectables-links-module-UserModule-374a4da8909080013ea9c5aad65c52002b13f448344638d8437da34c7f9020aef6fb55791dae1aa178fc5b5736a173b1c6798667f42558728d335c85bdc04fd6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-374a4da8909080013ea9c5aad65c52002b13f448344638d8437da34c7f9020aef6fb55791dae1aa178fc5b5736a173b1c6798667f42558728d335c85bdc04fd6"' :
                                        'id="xs-injectables-links-module-UserModule-374a4da8909080013ea9c5aad65c52002b13f448344638d8437da34c7f9020aef6fb55791dae1aa178fc5b5736a173b1c6798667f42558728d335c85bdc04fd6"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ReceiptController.html" data-type="entity-link" >ReceiptController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RoleController.html" data-type="entity-link" >RoleController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddRolleDto.html" data-type="entity-link" >AddRolleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateReceiptDto.html" data-type="entity-link" >CreateReceiptDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserdto.html" data-type="entity-link" >LoginUserdto</a>
                            </li>
                            <li class="link">
                                <a href="classes/NewsUserdto.html" data-type="entity-link" >NewsUserdto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Receipt.html" data-type="entity-link" >Receipt</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleUser.html" data-type="entity-link" >RoleUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/Tags.html" data-type="entity-link" >Tags</a>
                            </li>
                            <li class="link">
                                <a href="classes/TagsDto.html" data-type="entity-link" >TagsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileService.html" data-type="entity-link" >FileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MongooseConfigService.html" data-type="entity-link" >MongooseConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReceiptService.html" data-type="entity-link" >ReceiptService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoleService.html" data-type="entity-link" >RoleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/UserDetails.html" data-type="entity-link" >UserDetails</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});