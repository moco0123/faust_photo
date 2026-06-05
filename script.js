document.addEventListener('DOMContentLoaded', () => {
    // 監視対象の要素をすべて取得
    const revealElements = document.querySelectorAll('.reveal');

    // Intersection Observerの設定
    const observerOptions = {
        root: null, // ビューポートを基準にする
        rootMargin: '-5% 0px', // 画面の上下5%の範囲に入ったら反応
        threshold: 0.1 // 10%が見えたら実行
    };

    // 要素が画面内に入ったときの処理
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 'is-visible'クラスを付与してアニメーションを開始
                entry.target.classList.add('is-visible');
                
                // 一度表示した後は監視を解除（何度もアニメーションさせたい場合は不要）
                // observer.unobserve(entry.target);
            } else {
                // 画面外に出た時にリセットしたい場合はクラスを外す
                // entry.target.classList.remove('is-visible');
            }
        });
    };

    // オブザーバーの作成
    const observer = new IntersectionObserver(revealCallback, observerOptions);

    // 各要素の監視を開始
    revealElements.forEach(el => {
        observer.observe(el);
    });
});
