<?php

namespace App\Providers\Filament;

use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages\Dashboard;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->login()
            ->registration()
            ->colors([
                'primary' => Color::hex('#0a1128'),
                'gray' => Color::Slate,
            ])
            ->font('Inter')
            ->brandName('Nexus AI Landing Platform')
            ->maxContentWidth('2xl')
            ->sidebarFullyCollapsibleOnDesktop()
            ->darkMode(true)

            ->renderHook(
    'filament::styles.end',
    fn () => new \Illuminate\Support\HtmlString("
        <style>
            /* Sidebar Navy Blue Theme - Force Apply */
            .fi-sidebar,
            .fi-sidebar-nav,
            .fi-sidebar-header,
            nav.fi-sidebar-nav {
                background-color: #0a1128 !important;
            }

            /* Sidebar Text & Icons */
            .fi-sidebar-item-label,
            .fi-sidebar-item-icon,
            .fi-sidebar-group-label {
                color: #ffffff !important;
            }

            /* Sidebar Links Default */
            .fi-sidebar-item-button {
                color: #cbd5e1 !important;
            }

            .fi-sidebar-item-button .fi-sidebar-item-label {
                color: #cbd5e1 !important;
            }

            /* Hover State */
            .fi-sidebar-item-button:hover {
                background-color: rgba(255, 255, 255, 0.08) !important;
            }
            .fi-sidebar-item-button:hover .fi-sidebar-item-label,
            .fi-sidebar-item-button:hover .fi-sidebar-item-icon {
                color: #ffffff !important;
            }

            /* Active/Selected Item */
            .fi-sidebar-item-button.fi-active {
                background-color: #132056 !important;
            }
            .fi-sidebar-item-button.fi-active .fi-sidebar-item-label,
            .fi-sidebar-item-button.fi-active .fi-sidebar-item-icon {
                color: #ffffff !important;
            }

            /* Sidebar Border */
            .fi-sidebar {
                border-right: 1px solid #132056 !important;
            }

            /* Brand/Logo area inside sidebar */
            .fi-sidebar-header {
                background-color: #0a1128 !important;
                border-bottom: 1px solid #132056 !important;
            }

            /* Content Area stays white */
            body, html, .fi-layout, .fi-main {
                background-color: #ffffff !important;
            }

            .dark body, .dark .fi-layout, .dark .fi-main {
                background-color: #ffffff !important;
            }

            header.fi-topbar {
                background-color: transparent !important;
            }
        </style>
    ")
            )
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\\Filament\\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\\Filament\\Pages')
            ->pages([
                Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\\Filament\\Widgets')
            ->widgets([
                \Filament\Widgets\AccountWidget::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}
