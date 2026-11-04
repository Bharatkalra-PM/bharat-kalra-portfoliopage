import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const timesItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page.getSize();
  const margin = 48;
  let y = height - margin;

  const drawText = (
    text: string,
    font: typeof timesRoman,
    size: number,
    color = rgb(0.12, 0.12, 0.12),
    indent = 0
  ) => {
    page.drawText(text, {
      x: margin + indent,
      y,
      size,
      font,
      color,
    });
    y -= size + 4;
  };

  const drawLine = () => {
    page.drawLine({
      start: { x: margin, y: y + 2 },
      end: { x: width - margin, y: y + 2 },
      thickness: 0.75,
      color: rgb(0.7, 0.7, 0.7),
    });
    y -= 8;
  };

  // Header
  drawText('BHARAT KALRA', timesBold, 20, rgb(0.08, 0.08, 0.08));
  drawText('AI-Focused Product Manager', timesRoman, 12, rgb(0.3, 0.3, 0.3));
  drawText(
    'Phone: +91 99538 60542  |  Email: bharatk6325@gmail.com  |  LinkedIn: linkedin.com/in/pm-bharat-kalra/',
    timesRoman,
    9.5,
    rgb(0.35, 0.35, 0.35)
  );
  drawText('Location: Mumbai, Pune, Bengaluru, Remote or Outside India  |  GitHub: github.com/Bharatkalra-PM', timesRoman, 9.5, rgb(0.35, 0.35, 0.35));
  y -= 4;
  drawLine();

  // Summary
  drawText('EXECUTIVE SUMMARY', timesBold, 11, rgb(0.1, 0.1, 0.1));
  drawText(
    '8+ years building and scaling digital products across B2B and B2C. Track record of driving 2x traffic growth,',
    timesRoman,
    9.5
  );
  drawText(
    'launching high-impact partner ecosystems, and delivering end-to-end AI products (RAG, evals, agents, fine-tuning).',
    timesRoman,
    9.5
  );
  y -= 6;
  drawLine();

  // Experience
  drawText('PROFESSIONAL EXPERIENCE', timesBold, 11, rgb(0.1, 0.1, 0.1));

  // Role 1
  drawText('AI Upskilling & Independent Product Building', timesBold, 10.5);
  drawText('Independent Product Builder  |  Feb 2026 – Present', timesItalic, 9, rgb(0.4, 0.4, 0.4));
  drawText('• Completed Saïd Business School, Oxford University certification in Generative and Agentic AI.', timesRoman, 9, rgb(0.15, 0.15, 0.15), 10);
  drawText('• Completed 15-week AI Product Management program with HelloPM (system architecture, evals, agents).', timesRoman, 9, rgb(0.15, 0.15, 0.15), 10);
  drawText('• Built 4 end-to-end product case studies: People Like Me (live web app), Agent Copilot (RAG), Claude Diff, Amazon Trust.', timesRoman, 9, rgb(0.15, 0.15, 0.15), 10);
  y -= 4;

  // Role 2
  drawText('Senior Product Manager, Bancassurance', timesBold, 10.5);
  drawText('Axis Max Life Insurance  |  Feb 2024 – Jan 2026', timesItalic, 9, rgb(0.4, 0.4, 0.4));
  drawText('• Metrics: Seller activation 43% -> 48% | Onboarding TAT down 60% | NPS up 30% | Rs. 30 Cr expected added revenue.', timesRoman, 9, rgb(0.15, 0.15, 0.15), 10);
  drawText('• Created the product roadmap, end-to-end solutioning, and product delivery for partner bank journeys.', timesRoman, 9, rgb(0.15, 0.15, 0.15), 10);
  drawText('• Product Owner for the SME Business Insurance ecosystem: presales pitching tool, fast onboarding, and rural journeys.', timesRoman, 9, rgb(0.15, 0.15, 0.15), 10);
  drawText('• Launched a POSV portal for sellers, reducing verification-level complaints by 80%.', timesRoman, 9, rgb(0.15, 0.15, 0.15), 10);
  drawText('• Built 360-degree portfolio view for Burgundy premium clients, enabling personalized advisor recommendations.', timesRoman, 9, rgb(0.15, 0.15, 0.15), 10);
  y -= 4;

  // Role 3
  drawText('Senior Manager, Digital Partnership', timesBold, 10.5);
  drawText('Bharti AXA Life Insurance  |  Dec 2022 – Sep 2023', timesItalic, 9, rgb(0.4, 0.4, 0.4));
  drawText('• Increased lead generation for Group products by 50% through comprehensive journey and funnel revamp.', timesRoman, 9, rgb(0.15, 0.15, 0.15), 10);
  drawText('• Led B2B partnership propositions, onboarding, technical integrations, go-lives, and GTM sales initiatives.', timesRoman, 9, rgb(0.15, 0.15, 0.15), 10);
  y -= 4;

  // Role 4
  drawText('Product Manager, D2C Channel', timesBold, 10.5);
  drawText('Tata AIA Life Insurance  |  May 2019 – Dec 2022', timesItalic, 9, rgb(0.4, 0.4, 0.4));
  drawText('• Led D2C platform revamp on Adobe stack (AEM, Target, Analytics): 201 pages, 1.9M users, doubled MoM traffic.', timesRoman, 9, rgb(0.15, 0.15, 0.15), 10);
  drawText('• Lifted lead gen +50%, digital transactions +40%, page load from 7s to 2.5s, NPS from 45 to 54 in 5 months.', timesRoman, 9, rgb(0.15, 0.15, 0.15), 10);
  drawText('• Executed 40+ A/B tests and personalization use cases (+20% leads, Rs. 5L/month added commercial benefit).', timesRoman, 9, rgb(0.15, 0.15, 0.15), 10);
  drawText('• Branch kiosk self-service adoption lifted from 60% to 90% across 100 branches; microservices payment integration +20%.', timesRoman, 9, rgb(0.15, 0.15, 0.15), 10);
  drawText('• Awarded R1 top-tier performance rating.', timesRoman, 9, rgb(0.15, 0.15, 0.15), 10);
  y -= 4;

  // Role 5
  drawText('Associate Software Engineer  |  Accenture  (May 2015 – May 2016)', timesRoman, 9, rgb(0.3, 0.3, 0.3));
  drawText('• Web & app QA, optimization, and automation (Java, Selenium) for insurance client across 50 APAC countries.', timesRoman, 8.5, rgb(0.35, 0.35, 0.35), 10);
  y -= 6;
  drawLine();

  // Education & Credentials
  drawText('EDUCATION & CERTIFICATIONS', timesBold, 11, rgb(0.1, 0.1, 0.1));
  drawText('• PGDM (Banking & Financial Services) – International Management Institute (IMI), New Delhi (2017 – 2019)', timesRoman, 9);
  drawText('• B.Tech (Computer Science & Engineering) – GGSIPU, New Delhi (2010 – 2014)', timesRoman, 9);
  drawText('• Generative and Agentic AI Certification – Saïd Business School, University of Oxford (Aug 2026)', timesRoman, 9);
  drawText('• Finance for Non-Finance Professionals – Rice University (2017)', timesRoman, 9);
  y -= 6;
  drawLine();

  // Skills
  drawText('SKILLS & COMPETENCIES', timesBold, 11, rgb(0.1, 0.1, 0.1));
  drawText('• AI & GenAI: LLMs, RAG Architecture, Agentic Workflows, Evaluation Frameworks, Prompt Engineering', timesRoman, 9);
  drawText('• Product Management: Discovery, PRDs, Product Roadmaps, A/B Testing, User Funnels, Partner Integrations', timesRoman, 9);
  drawText('• Tech & Analytics: CMS (AEM), Adobe Analytics, Adobe Target, System Design, REST APIs, SQL, Python, React, Figma', timesRoman, 9);

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve('public/docs/resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('Successfully generated resume.pdf at', outputPath, 'bytes:', pdfBytes.length);
}

generateResume().catch(console.error);
