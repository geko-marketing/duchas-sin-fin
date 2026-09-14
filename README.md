<div align="center">

# **Ducha Sin Fin**

💧 🔄 🌍

#### *La ducha del futuro, hoy*

</div>

---

Un sistema que limpia, filtra y recircula agua en un flujo continuo. **Ahorra hasta el 80% de agua y energía** sin renunciar a tu calidad de vida.

**Estado:** Production-ready ✅ | **Licencia:** Proprietary | **Stack:** Next.js 16 + React 19 + TypeScript + Tailwind CSS v4

---

## 🚀 Quick Start

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env.local

# 3. Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## ✨ Características Principales

| Característica | Descripción |
|---|---|
| 💧 **Ahorro de Agua** | Sistema de filtración circular que recircula agua. Reduce consumo hasta **80%**. |
| ⚡ **Eficiencia Energética** | Consumo eléctrico optimizado con bombas de bajo impacto y filtros inteligentes. |
| 🌿 **Sostenibilidad** | Impacto ambiental mínimo. Materiales reciclables y degradables en todas sus componentes. |

---

## 📄 Páginas Completadas

✅ Home · Tecnología · Ahorro · Crowdfunding · FAQ · Contacto  
✅ Sectores · Sostenibilidad · Blog · Nosotros · Donación éxito  

⚠️ **Pendiente:** Páginas legales (/privacidad, /cookies, /terminos)

---

## 🛠️ Tech Stack

**Frontend:**
- ⚡ Next.js 16 (App Router)
- ⚛️ React 19.2
- 🔷 TypeScript (strict mode)
- 🎨 Tailwind CSS v4

**Animaciones & Interactividad:**
- ✨ Framer Motion (motion/react)
- 🎯 Lucide Icons

**Backend & Pagos:**
- 💳 Stripe (checkout + webhooks)
- 🔑 API Routes

---

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Rutas Next.js 16
│   ├── page.tsx           # Home
│   ├── [feature]/         # Ahorro, FAQ, Contacto, etc.
│   ├── api/               # Route handlers (donate, webhook)
│   ├── globals.css        # Estilos globales + tokens CSS
│   └── layout.tsx         # Root layout
├── components/
│   ├── ui/                # Primitivos (navbar, buttons)
│   ├── [feature]/         # Componentes por feature
│   └── icons.tsx          # SVG icons personalizados
├── lib/
│   ├── utils.ts           # Helper cn()
│   ├── stripe.ts          # Configuración Stripe
│   └── types/             # TypeScript types
└── hooks/
```

---

## 🔧 Comandos Disponibles

```bash
npm run dev        # Servidor de desarrollo
npm run build      # Build de producción
npm run typecheck  # Verificar tipos TypeScript
npm run lint       # ESLint
npm run check      # lint + typecheck + build
```

---

## 🔐 Variables de Entorno

Crear `.env.local`:

```env
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

Obtener en: [Dashboard de Stripe](https://dashboard.stripe.com)

---

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|---|---|---|
| Cyan (Principal) | `#00c9d6` | Botones, textos destacados |
| Azul | `#2563eb` | Gradientes, acentos |
| Teal | `#0e7490` | Variantes, hover |
| Oscuro | `#020b18` | Fondo principal |
| Oscuro 2 | `#0b1f3b` | Cartas, elementos |

---

## 📝 Commits & Versionado

- **Convencional:** feat/fix/refactor/docs/chore/perf/ci
- **Rama principal:** `main`
- **Un único commit:** `first-commit` con todo el proyecto

---

## 🚀 Deploy

### En Vercel (Recomendado)

1. Push a GitHub: `git push origin main`
2. Conectar repo en [Vercel Dashboard](https://vercel.com)
3. Agregar variables de entorno:
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
4. Deploy automático ✨

### Comandos locales

```bash
npm run build    # Test build localmente
npm run start    # Servir producción localmente
```

---

## 📚 Documentación

- **Proyecto:** Consulta `CLAUDE.md` para contexto completo
- **Stripe:** [Documentación oficial](https://stripe.com/docs)
- **Next.js:** [Docs App Router](https://nextjs.org/docs)
- **Tailwind v4:** [Documentación](https://tailwindcss.com/docs)

---

## 🔗 Enlaces Útiles

- 🌐 Website: (próximamente)
- 📧 Email: mikelrow00@gmail.com
- 🐙 GitHub: [mkcodev/ducha-sin-fin](https://github.com/mkcodev/ducha-sin-fin)
- 🐛 Issues: [GitHub Issues](https://github.com/mkcodev/ducha-sin-fin/issues)

---

## 📜 Licencia

MIT License © 2026 Mikel Codev

Consulta [LICENSE](./LICENSE) para detalles completos.

---

<div align="center">

### Made with ❤️ — Transformemos el futuro del agua

**Proyecto privado para cliente**

</div>
