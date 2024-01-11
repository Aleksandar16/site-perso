<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;
use Symfony\UX\Chartjs\Model\Chart;

class DefaultController extends AbstractController
{
    #[Route('/', name: 'app_default')]
    public function index(): Response
    {
        $projects = json_decode(file_get_contents('../assets/data/projects.json'), true);
        $technologies = json_decode(file_get_contents('../assets/data/technologies.json'), true);

        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
            'projects' => $projects,
            'technologies' => $technologies,
        ]);
    }

    #[Route('/project/{slug}', name: 'app_project')]
    public function project(ChartBuilderInterface $chartBuilder, string $slug): Response
    {
        $chart = $chartBuilder->createChart(Chart::TYPE_LINE);
        $chart->setData([
            'labels' => ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            'datasets' => [
                [
                    'label' => 'Cookies eaten 🍪',
                    'backgroundColor' => 'rgb(255, 99, 132, .4)',
                    'borderColor' => 'rgb(255, 99, 132)',
                    'data' => [2, 10, 5, 18, 20, 30, 45],
                    'tension' => 0.4,
                ],
                [
                    'label' => 'Km walked 🏃‍♀️',
                    'backgroundColor' => 'rgba(45, 220, 126, .4)',
                    'borderColor' => 'rgba(45, 220, 126)',
                    'data' => [10, 15, 4, 3, 25, 41, 25],
                    'tension' => 0.4,
                ],
            ],
        ]);
        $chart->setOptions([
            'maintainAspectRatio' => false,
        ]);

        $data = json_decode(file_get_contents('../assets/data/projects.json'), true);
        $obj = null;

        foreach ($data as $item) {
            if ($item['slug'] === $slug) {
                $obj = $item;
                break;
            }
        }

        if (!$obj) {
            throw $this->createNotFoundException('Objet non trouvé');
        }

        return $this->render('default/project.html.twig', [
            'chart' => $chart,
            'obj' => $obj,
        ]);
    }
}
