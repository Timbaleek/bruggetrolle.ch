<script lang="ts">
    import ArticleList from "../../lib/ArticleList.svelte";

    import BaseWrapper from "$lib/BaseWrapper.svelte";
    import Titlebar from "$lib/Titlebar.svelte";

    import Ibfdd_plakat from "$lib/assets/highlights/Ibfdd_plakat.jpg";
    import Kvu_plakat from "$lib/assets/highlights/Kvu_plakat.jpg";
    import SommernachtCast from "$lib/assets/highlights/SommernachtCast.jpg";

    const items = [
        {
            title: "(K)einer von uns.",
            subtitle: "Die erste Produktion als Verein.",
            date: "21.-29. März 2025",
            description:
                "Diese Produktion ist unser selbstgeschriebenes Theaterstück '(K)einer von uns'. Eine Fremde kommt in ein scheinbar ruhiges Dorf - und plötzlich gerät das Gleichgewicht ins Wanken. Ihre Anwesenheit löst Fragen aus, bringt Konflikte an die Oberfläche und stellt Beziehungen auf die Probe. Was zunächst wie Neugier wirkt, wird schnell zu Misstrauen, Gerüchten und gegenseitigen Verdächtigungen. Während die Dorfgemeinschaft versucht, Kontrolle zu behalten, zeigt sich: Hinter der Ordnung liegen Geheimnisse, die lange verborgen waren. Die Fremde wird zum Mittelpunkt eines Geschehens, das niemand mehr stoppen kann. Die Aufführungen in der Turnhalle Au in Lauffohr wurden aufgezeichnet und sogar live übertragen, woraus ein Film entstehen wird. Bei 4 Aufführungen durften wir über 220 Zuschauer begrüssen. Wir haben unsere Halle als Bühne eingeweiht und ein tiefes Verständnis für unsere Charaktere entwickelt.",
            image: Kvu_plakat,
        },
        {
            title: "Ich bin für dich da.",
            subtitle: "Unsere erste Produktion in dieser Zusammenstellung.",
            date: "15.-23. Juni 2024",
            description:
                "Unsere erste Produktion als Verein. Wir haben uns sehr gefreut, wieder auf der Bühne zu stehen. Aufgeführt wurde 'Ich bin für dich da.', ein selbstgeschriebenes Stück, das die Beziehung zwischen Geschwistern und ihren Schutzengeln thematisiert. Es wurde an der FHNW in Brugg aufgeführt. Die Aufführungen wurden aufgezeichnet und daraus ein Film erstellt. Diese Produktion war für uns quasi die Generalprobe für den Verein, der direkt danach gegründet wurde.",
            image: Ibfdd_plakat,
        },
        {
            title: "Ein Sommernachtstraum",
            subtitle: "Produktion des Kantitheaters Baden",
            date: "13. März 2020",
            description:
                "Schon während der Kanti haben wir zusammen Theater gespielt. Den klassischen Text eigens aufbereitet, haben wir uns in die Proben gestürzt. Am Tag der Aufführung wurde aufgrund der Corona-Pandemie ein Lockdown verhängt, weshalb wir das Stück nicht vor Publikum aufführen konnten. Es wurde aber aufgezeichnet und in einem Film verewigt. Hier haben wir gelernt, eigens eine Produktion auf die Beine zu stellen.",
            image: SommernachtCast,
        },
    ];
</script>

<BaseWrapper>
    <h1 class="title is-1">Highlights</h1>

    <p class="subtitle is-3">
        Hier siehst du Highlights von unseren vergangenen Aufführungen und
        Events.
    </p>

    <ArticleList {items}></ArticleList>
</BaseWrapper>

<style>
</style>
