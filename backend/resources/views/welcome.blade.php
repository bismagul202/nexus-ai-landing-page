<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name', 'Nexus AI') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />

        <style>
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }

            body {
                font-family: 'Instrument Sans', ui-sans-serif, system-ui, sans-serif;
                background: radial-gradient(circle at top, #132056 0%, #0a1128 60%);
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1.5rem;
                position: relative;
                overflow: hidden;
            }

            body::before {
                content: "";
                position: absolute;
                top: -20%;
                left: 50%;
                transform: translateX(-50%);
                width: 60rem;
                height: 60rem;
                background: radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%);
                pointer-events: none;
            }

            .card {
                position: relative;
                z-index: 1;
                width: 100%;
                max-width: 32rem;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(96, 130, 220, 0.25);
                border-radius: 1.5rem;
                padding: 3rem 2.5rem;
                text-align: center;
                backdrop-filter: blur(12px);
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            }

            .logo {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 3.5rem;
                height: 3.5rem;
                border-radius: 1rem;
                background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4);
                margin-bottom: 1.5rem;
            }

            .logo span {
                font-size: 1.5rem;
                font-weight: 800;
                color: #ffffff;
            }

            h1 {
                font-size: 1.85rem;
                font-weight: 700;
                color: #ffffff;
                letter-spacing: -0.02em;
                margin-bottom: 0.75rem;
            }

            h1 .accent {
                color: #60a5fa;
            }

            p.subtitle {
                font-size: 0.95rem;
                color: rgba(191, 210, 255, 0.65);
                line-height: 1.6;
                margin-bottom: 2.25rem;
            }

            .actions {
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
            }

            @media (min-width: 480px) {
                .actions {
                    flex-direction: row;
                }
            }

            .btn {
                flex: 1;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                padding: 0.85rem 1.5rem;
                border-radius: 0.75rem;
                font-size: 0.9rem;
                font-weight: 600;
                text-decoration: none;
                transition: all 0.2s ease;
                border: 1px solid transparent;
            }

            .btn-primary {
                background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                color: #ffffff;
                box-shadow: 0 10px 20px -5px rgba(59, 130, 246, 0.35);
            }

            .btn-primary:hover {
                filter: brightness(1.1);
                box-shadow: 0 12px 24px -5px rgba(59, 130, 246, 0.45);
                transform: translateY(-1px);
            }

            .btn-secondary {
                background: rgba(255, 255, 255, 0.04);
                color: #dbe4ff;
                border-color: rgba(96, 130, 220, 0.3);
            }

            .btn-secondary:hover {
                background: rgba(255, 255, 255, 0.08);
                border-color: rgba(96, 130, 220, 0.5);
                transform: translateY(-1px);
            }

            .footer-note {
                margin-top: 2rem;
                font-size: 0.75rem;
                color: rgba(148, 168, 220, 0.45);
            }
        </style>
    </head>
    <body>
        <div class="card">
            <div class="logo">
                <span>N</span>
            </div>

            <h1>Welcome to Nexus<span class="accent">AI</span> Admin Panel</h1>
            <p class="subtitle">
                Manage content, leads, and platform settings from a single, secure dashboard built for the Nexus AI team.
            </p>

            <div class="actions">
                <a href="{{ url('/admin/login') }}" class="btn btn-primary">
                    Login
                </a>
                <a href="{{ url('/admin/register') }}" class="btn btn-secondary">
                    Register
                </a>
            </div>

            <p class="footer-note">
                &copy; {{ date('Y') }} Nexus AI. All rights reserved.
            </p>
        </div>
    </body>
</html>
