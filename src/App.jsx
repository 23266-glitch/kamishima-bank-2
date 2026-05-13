// publicフォルダに logo.png という名前でロゴ画像を入れてください
// 例: kamishima-bank/public/logo.png

export default function KamishimaBankSite() {
  return (
    <div className="min-h-screen bg-[#f3f2ee] text-[#103b2d] font-serif">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d3b2e] via-[#124a38] to-[#0b2f25] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img
                src="/logo.png"
                alt="上島銀行ロゴ"
                className="w-24 h-24 object-contain"
              />

              <div>
                <h1 className="text-5xl tracking-[0.3em] font-bold">上島銀行</h1>
                <p className="text-lg tracking-[0.5em] mt-2 text-[#d7e6dd]">NOMONEY</p>
              </div>
            </div>

            <h2 className="text-5xl leading-tight mb-8 font-light">
              建築の挑戦に、<br />
              確かな基盤を。
            </h2>

            <p className="text-lg text-[#d7e6dd] leading-8 max-w-xl">
              上島銀行は、建築ゼミにおける創造的な挑戦を支援する架空金融機関です。
              模型制作、都市提案、プレゼンボード設計まで、あらゆるプロジェクトを金融の視点から支えます。
            </p>

            <div className="flex gap-4 mt-10 flex-wrap">
              <button className="px-8 py-4 bg-white text-[#103b2d] rounded-2xl font-bold shadow-lg hover:scale-105 transition">
                プロジェクト支援
              </button>
              <button className="px-8 py-4 border border-white/40 rounded-2xl hover:bg-white/10 transition">
                融資シミュレーション
              </button>
            </div>
          </div>

          <div className="relative h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 border border-white/10 rounded-[40px]" />
            <div className="absolute inset-10 border border-white/10 rounded-[30px]" />

            <div className="relative w-[360px] h-[360px] flex items-center justify-center">
              <img
                src="/logo.png"
                alt="上島銀行ロゴ"
                className="w-[320px] drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="tracking-[0.4em] text-sm text-[#456457] mb-4">SERVICES</p>
          <h3 className="text-4xl">ゼミ活動を支える3つの支援</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: '融資',
              text: '模型材料費・印刷費・展示制作費など、建築学生特有のコストをサポート。',
            },
            {
              title: '資産形成',
              text: 'ゼミ内通貨を活用したポイント制度で、設計活動をより活発に。',
            },
            {
              title: 'プロジェクト支援',
              text: '都市提案やコンペ制作など、大規模な建築プロジェクトを後押し。',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-[32px] p-10 shadow-xl border border-[#d7d7d7] hover:-translate-y-2 transition"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#103b2d] mb-8" />
              <h4 className="text-3xl mb-6">{item.title}</h4>
              <p className="leading-8 text-[#355347]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mock Board */}
      <section className="bg-white py-24 border-y border-[#d7d7d7]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="tracking-[0.4em] text-sm text-[#456457] mb-4">PROJECT</p>
            <h3 className="text-5xl mb-8 leading-tight">
              都市と建築を、
              <br />
              次の段階へ。
            </h3>
            <p className="text-lg leading-9 text-[#355347]">
              上島銀行は、建築ゼミ内における新しい価値循環を目指しています。
              デザインと金融を結びつけることで、学生の創造力を最大限に引き出します。
            </p>
          </div>

          <div className="bg-[#f3f2ee] rounded-[40px] p-8 shadow-2xl border border-[#d9d4c8]">
            <div className="aspect-[4/3] rounded-[24px] bg-gradient-to-br from-[#e8e0cb] to-[#ffffff] mb-6 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="上島銀行ロゴ"
                className="w-48"
              />
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm tracking-[0.3em] text-[#456457]">SPONSORED BY</p>
                <h4 className="text-3xl mt-2">上島銀行</h4>
              </div>

              <button className="px-6 py-3 rounded-xl bg-[#103b2d] text-white hover:scale-105 transition">
                詳しく見る
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d3b2e] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h5 className="text-3xl tracking-[0.3em]">上島銀行</h5>
            <p className="text-[#d7e6dd] mt-2 tracking-[0.4em]">NOMONEY</p>
          </div>

          <div className="text-[#d7e6dd] text-sm tracking-[0.2em] text-center md:text-right">
            ARCHITECTURE × FINANCE × FUTURE
            <br />
            © 2026 KAMISHIMA BANK
          </div>
        </div>
      </footer>
    </div>
  )
}
