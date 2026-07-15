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
            ->colors([
                'primary' => Color::Blue,
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
                        /* Sidebar Fixed Blue Theme */
                        aside.fi-sidebar, .fi-sidebar-header, .fi-sidebar-nav {
                            background-color: #1e3a8a !important;
                        }
                        .fi-sidebar-item-label, .fi-sidebar-item-icon {
                            color: #ffffff !important;
                        }
                        .fi-sidebar-item-button.fi-active {
                            background-color: #2563eb !important;
                        }
                        .fi-sidebar-item-button.fi-active .fi-sidebar-item-label,
                        .fi-sidebar-item-button.fi-active .fi-sidebar-item-icon {
                            color: #ffffff !important;
                        }

                        /* Light Mode: Content Area White */
                        body, html, .fi-layout, .fi-main {
                            background-color: #ffffff !important;
                        }

                        /* Dark Mode: Content Area Dark */
                        .dark body, .dark .fi-layout, .dark .fi-main {
                            background-color: #020617 !important;
                        }

                        /* Ensure Topbar also stays neutral/matching */
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
