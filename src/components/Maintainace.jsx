export default function Maintainace() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 px-4">
            <div className="w-full max-w-lg rounded-2xl bg-white/10 p-8 text-center shadow-xl backdrop-blur-md border border-white/20">
                <h1 className="text-2xl md:text-3xl font-semibold text-white">
                    Pay hosting bills to continue...
                </h1>
                <p className="mt-3 text-slate-200">
                    This site is temporarily paused. For urgent matters, please contact us.
                </p>

                <a
                    href="mailto:metizitsolutions@gmail.com?subject=Hosting%20Billing%20Inquiry"
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-2 font-medium text-slate-900 shadow-lg hover:bg-amber-300 transition"
                >
                    Contact to Pay
                </a>

                <p className="mt-4 text-sm text-slate-400">
                    If you’ve already paid, please wait a few hours for reactivation.
                </p>
            </div>
        </div>
    );
}
