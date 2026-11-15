import banner from "./assets/banner.webp"
import logo from "./assets/logo.png"
import actualAppWindow from "./assets/actual_app_window.webp"
import screenMap from "./assets/screen_map.webp"
import screenLibrary from "./assets/screen_library.webp"
import recapPoster from "./assets/recap_poster.webp"
import mcpAi from "./assets/mcp_ai.webp"

export const TravelLocationExtractorAssets = {
  banner,
  logo,
  actualAppWindow,
  screenMap,
  screenLibrary,
  recapPoster,
  mcpAi,
}

export const travelLocationExtractorStructure = [
  {
    type: "bannerImage",
    value: {title: "", imgsrc: banner},
  },
  {
    type: "tophead",
    value: {
      caseName: "Travel Location Extractor",
      caseBio: "A Native Mac App to Relive Your Journeys, Track Routes & Turn 4 TB of Trip Media into an Interactive Atlas",
    },
  },
  {
    type: "brief",
    value: {
      briefTitle: "The Problem: 4 TB of Forgotten Journeys",
      content:
        "After years of solo motorcycle expeditions, coastal highway rides, and aerial drone cinematography, I had over 4 Terabytes of raw photos and 4K footage sitting on external hard drives. Thousands of memorable moments were trapped in nested folders that were rarely opened again. Mainstream photo apps either choke on multi-terabyte external drives, demand expensive monthly cloud subscriptions, or take weeks to upload. I wanted an effortless personal travel companion on my Mac: plug in my external drives, and instantly see an interactive map of everywhere I've explored, retrace my motorcycle routes stop-by-stop, design beautiful year recap posters, and relive every journey without uploading a single byte to the cloud.",
      links: [
        {
          linkName: "Download macOS App",
          src: "https://drive.google.com/file/d/1SrDWrZNZYDw0jQ4mXGeCyPcEO6ZXLoaC/view?usp=sharing",
        },
      ],
    },
  },
  {
    type: "fullImage",
    value: {
      title: "The Interactive Travel Map: Everywhere You've Explored at a Glance",
      imgsrc: actualAppWindow,
    },
  },
  {
    type: "usecaseScenarios",
    value: {
      title: "Built for the Open Road: Key Capabilities",
      options: [
        {
          title: "Animated Stop-by-Stop Trip Playback",
          content:
            "Hit 'Play' on any trip and watch your journey come alive. The map camera smoothly flies from destination to destination in the exact order you traveled, highlighting your route along mountain passes and coastal highways while pulling up the photos and aerial drone videos captured at each milestone.",
        },
        {
          children: [
            {
              title: "Effortless Multi-Drive Freedom (4+ TB)",
              content:
                "Built specifically for multi-terabyte external hard drives and SSDs. Plug in any USB drive, and the app instantly scans and maps thousands of files in minutes. When a drive is unplugged, your maps, route history, and place names stay completely accessible offline.",
            },
            {
              title: "Full Drone & 4K Video Geotagging",
              content:
                "4K aerial drone footage often lacks standard GPS tags in the video container. Travel Location Extractor automatically extracts location telemetry directly from flight logs and subtitle streams, ensuring every drone flight is pinned to its exact coordinates.",
            },
          ],
        },
        {
          children: [
            {
              title: "Hands-Free Voice Travel Journal",
              content:
                "Keep your thoughts and memories fresh while browsing. Tap the microphone icon to dictate thoughts ('unreal sunset along the coastal cliff trail'), and your words are instantly transcribed and attached directly to that stop.",
            },
            {
              title: "Print-Ready Year Recap Posters",
              content:
                "Celebrate your travels with custom year recap posters. Pick from themes like Midnight, Earth, Dark, and Minimal to export 2400px high-resolution prints featuring your route tracks, destination rankings, and photo mosaics ready for framing.",
            },
          ],
        },
        {
          title: "100% Offline & Completely Private",
          content:
            "No accounts, no cloud subscriptions, and no tracking. All 4+ TB of media indexing, map exploration, and trip journaling happen entirely on your Mac, keeping your personal travel memories 100% private.",
        },
      ],
    },
  },
  {
    type: "featureFlow",
    value: {
      category: "HOW IT WORKS: FROM COLD DRIVES TO LIVING JOURNEYS",
      title: "Turn Years of Forgotten Travel Media into an Interactive Personal Atlas",
    },
  },
  {
    type: "desktopGallery",
    value: {
      title: "Inside the App: Key Views & Capabilities",
      subtitle:
        "Retrace your journeys with live interactive maps, multi-drive storage management, print-ready poster exports, and conversational AI memories.",
      items: [
        {
          title: "Interactive Journey Map & Route Tracking",
          caption:
            "Chronological route lines, elevation contours, and clustered destination pins showing every stop explored across the country.",
          imgsrc: screenMap,
        },
        {
          title: "Multi-Drive Storage & Timeline Explorer",
          caption:
            "Effortlessly manage 4+ TB of media across multiple external USB drives (Elements, Seagate, Expansion) with year and month filters.",
          imgsrc: screenLibrary,
        },
        {
          title: "Year Recap Poster Studio",
          caption:
            "Generate 2400px high-resolution travel posters summarizing your entire year with route maps, top destinations, and year statistics.",
          imgsrc: recapPoster,
        },
        {
          title: "Chat With Your Private Travel Memories",
          caption:
            "Connect an AI assistant to ask natural questions like 'Where was I riding during my coastal trip?' and get instant answers completely offline.",
          imgsrc: mcpAi,
        },
      ],
    },
  },
  {
    type: "brief",
    value: {
      briefTitle: "Your Entire Travel Life in One Place",
      content:
        "From mapping solo motorcycle expeditions to browsing years of travel photos across every destination, Travel Location Extractor turns silent external drives into a living personal atlas. 100% private, 100% offline, and built for travellers who love the road.",
      links: [
        {
          linkName: "Download macOS App",
          src: "https://drive.google.com/file/d/1SrDWrZNZYDw0jQ4mXGeCyPcEO6ZXLoaC/view?usp=sharing",
        },
      ],
    },
  },
  {
    type: "bannerImage",
    value: {title: "", imgsrc: banner},
  },
]
